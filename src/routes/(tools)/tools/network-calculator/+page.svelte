<script>
    let ipAddress = $state([192, 168, 0, 1]); // Изначальный IP-адрес
    let subnetMask = $state(24); // Изначальная маска подсети
    let networkAddress = "";
    let broadcastAddress = "";
    let availableHosts = 0;

    const getSubnetMask = (cidr) => {
        let mask = "";
        for (let i = 0; i < 4; i++) {
            let octet = 0;
            if (cidr > 8) {
                octet = 255;
                cidr -= 8;
            } else if (cidr > 0) {
                octet = 256 - Math.pow(2, 8 - cidr);
                cidr = 0;
            }
            mask += i < 3 ? `${octet}.` : `${octet}`;
        }
        return mask;
    };

    // Генерируем массив масок CIDR
    const subnetMasks = Array.from({ length: 25 }, (_, index) => {
        const cidrValue = index + 8;
        return {
            value: cidrValue,
            label: `${getSubnetMask(cidrValue)} (/${cidrValue})`,
        };
    });

    // Функция для вычисления диапазона адресов и других данных
    const calculateNetwork = () => {
        const ipParts = ipAddress;
        const mask = 32 - subnetMask;
        const network = ipParts.slice();
        // Пример простого вычисления сети (считаем только для примера)
        network[3] = 0;
        networkAddress = network.join(".");
        broadcastAddress = `${ipParts[0]}.${ipParts[1]}.${ipParts[2]}.${ipParts[3] + (Math.pow(2, mask) - 1)}`;
        availableHosts = Math.pow(2, mask) - 2; // Минус два (сеть и broadcast)
    };

    // Вычисление сразу после загрузки страницы
    $effect(() => {
        calculateNetwork();
    });
</script>

<div class="max-w-4xl mx-auto p-6 space-y-4 bg-white rounded-lg shadow-lg">
    <h2 class="text-2xl font-semibold text-center">Калькулятор сети</h2>

    <!-- Ввод IP-адреса -->
    <div class="flex space-x-2">
        <input
            type="number"
            bind:value={ipAddress[0]}
            min="0"
            max="255"
            class="input w-1/4"
        />
        <input
            type="number"
            bind:value={ipAddress[1]}
            min="0"
            max="255"
            class="input w-1/4"
        />
        <input
            type="number"
            bind:value={ipAddress[2]}
            min="0"
            max="255"
            class="input w-1/4"
        />
        <input
            type="number"
            bind:value={ipAddress[3]}
            min="0"
            max="255"
            class="input w-1/4"
        />
    </div>

    <!-- Выбор маски подсети -->
    <div>
        <label class="block">Маска подсети</label>
        <div class="flex flex-col">
            <select bind:value={subnetMask} class="select select-bordered">
                {#each subnetMasks as mask}
                    <option value={mask.value}>{mask.label}</option>
                {/each}
            </select>

            <div class="flex-1 w-full">
                <input
                    type="range"
                    bind:value={subnetMask}
                    min="8"
                    max="32"
                    step="1"
                    class="range range-primary"
                />
                <span>{subnetMask}</span>
            </div>
        </div>
    </div>

    <!-- Вывод результатов -->
    <div class="space-y-2">
        <div><strong>Сетевой адрес:</strong> {networkAddress}</div>
        <div><strong>Широковещательный адрес:</strong> {broadcastAddress}</div>
        <div><strong>Доступные хосты:</strong> {availableHosts}</div>
    </div>

    <!-- Кнопка для перерасчёта -->
    <div class="text-center">
        <button on:click={calculateNetwork} class="btn btn-primary"
            >Пересчитать</button
        >
    </div>
</div>
