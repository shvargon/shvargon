<script>
    import { onMount } from "svelte";
    let ipAddress = "192.168.0.1"; // Изначальный IP-адрес
    let subnetMask = 24; // Изначальная маска подсети
    let networkAddress = "";
    let broadcastAddress = "";
    let availableHosts = 0;

    // Функция для вычисления диапазона адресов и других данных
    const calculateNetwork = () => {
        const ipParts = ipAddress.split(".").map(Number);
        const mask = 32 - subnetMask;
        const network = ipParts.slice();
        // Пример простого вычисления сети (считаем только для примера)
        network[3] = 0;
        networkAddress = network.join(".");
        broadcastAddress = `${ipParts[0]}.${ipParts[1]}.${ipParts[2]}.${ipParts[3] + (Math.pow(2, mask) - 1)}`;
        availableHosts = Math.pow(2, mask) - 2; // Минус два (сеть и broadcast)
    };

    // Вычисление сразу после загрузки страницы
    onMount(() => {
        calculateNetwork();
    });
</script>

<div class="max-w-4xl mx-auto p-6 space-y-4 bg-white rounded-lg shadow-lg">
    <h2 class="text-2xl font-semibold text-center">Калькулятор сети</h2>

    <!-- Ввод IP-адреса -->
    <div class="flex space-x-2">
        <input
            type="number"
            bind:value={ipAddress.split(".")[0]}
            min="0"
            max="255"
            class="input input-bordered w-1/4"
        />
        <input
            type="number"
            bind:value={ipAddress.split(".")[1]}
            min="0"
            max="255"
            class="input input-bordered w-1/4"
        />
        <input
            type="number"
            bind:value={ipAddress.split(".")[2]}
            min="0"
            max="255"
            class="input input-bordered w-1/4"
        />
        <input
            type="number"
            bind:value={ipAddress.split(".")[3]}
            min="0"
            max="255"
            class="input input-bordered w-1/4"
        />
    </div>

    <!-- Выбор маски подсети -->
    <div>
        <label class="block">Маска подсети</label>
        <div class="flex items-center space-x-4">
            <select bind:value={subnetMask} class="select select-bordered">
                <option value="8">255.0.0.0 (/8)</option>
                <option value="16">255.255.0.0 (/16)</option>
                <option value="24">255.255.255.0 (/24)</option>
                <option value="30">255.255.255.252 (/30)</option>
            </select>

            <div class="flex-1">
                <input
                    type="range"
                    bind:value={subnetMask}
                    min="8"
                    max="30"
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
