<script lang="ts">
    import { onMount, onDestroy } from 'svelte';

    // Define the type for a single monitor data entry
    type MonitorDataEntry = {
        name: string;
        chain_id: string;
        moniker: string;
        bonded: boolean;
        jailed: boolean;
        tombstoned: boolean;
        missed: number;
        window: number;
        nodes: number;
        healthy_nodes: number;
        active_alerts: number;
        height: number;
        last_error: string;
        blocks: number[];
    };

    // Define monitorData as an array of MonitorDataEntry
    let monitorData: MonitorDataEntry[] = [];

    let previousHeights: number[] = [];
    let isRotating = true;

    async function fetchMonitorData() {
        const response = await fetch(import.meta.env.VITE_TENDERDUTY_API_URL); // Update this path to your actual JSON data URL
        const data = await response.json();

        monitorData = data.Status as MonitorDataEntry[]; // Type assertion to ensure TypeScript recognizes the structure

        // Track height changes to control rotation animation
        monitorData.forEach((entry, index) => {
            if (entry.height !== previousHeights[index]) {
                isRotating = false;
                previousHeights[index] = entry.height;
                setTimeout(() => (isRotating = true), 1000); // Brief pause before restarting rotation
            }
        });
    }

    onMount(() => {
        // Initial fetch
        fetchMonitorData();

        // Set interval to fetch every 3 seconds
        const interval = setInterval(fetchMonitorData, 3000);

        // Clear interval when component is destroyed
        onDestroy(() => clearInterval(interval));
    });
</script>


<div class="page">
    <div class="page-wrapper">
        <div class="page-body">
            <div class="container">
                <div class="row d-flex justify-content-center p-b-30">
                    <div class="col-sm-4">
                        <div class="d-flex m-t-30">
                            <span class="status-indicator {monitorData.every(d => d.active_alerts === 0) ? 'status-green' : 'status-yellow'} status-indicator-animated">
                                <span class="status-indicator-circle"></span>
                                <span class="status-indicator-circle"></span>
                                <span class="status-indicator-circle"></span>
                            </span>
                            <h1 class="m-b-0 p-b-0">
                                {monitorData.every(d => d.active_alerts === 0) ? 'All Services are operational' : 'Some Services have issues'}
                            </h1>
                        </div>
                    </div>
                </div>

                <div class="row d-flex justify-content-center">
                    {#each monitorData as dataItem}
                        <div class="col-sm-6 col-11">
                            <div class="card">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h3 class="card-title text-secondary">{dataItem.name} ({dataItem.chain_id})</h3>
                                        <h3 class="card-title text-green">
                                            {dataItem.bonded ? 'Active' : 'Inactive'}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                                <path d="M9 12l2 2l4 -4" />
                                            </svg>
                                        </h3>
                                    </div>

                                    <div class="">
                                        <div class="h1 m-b-5 me-2 monospace">
                                            {((1 - dataItem.missed / dataItem.window) * 100).toFixed(2)}%
                                        </div>
                                        <div class="tracking p-b-15">
                                            <div class="tracking-block bg-grey glow-background" data-bs-toggle="tooltip"></div>
                                            {#each dataItem.blocks as block}
                                                <div 
                                                    class="tracking-block 
                                                        {block === 0 ? 'bg-red' : ''} 
                                                        {block === 1 ? 'bg-yellow' : ''} 
                                                        {block === 2 ? 'bg-orange' : ''} 
                                                        {block === 3 ? 'bg-success' : ''} 
                                                        {block === 4 ? 'bg-azure' : ''}"
                                                    data-bs-toggle="tooltip" 
                                                    title={
                                                        block === 0 ? 'Missed' : 
                                                        block === 1 ? 'Prevote Not Included' : 
                                                        block === 2 ? 'Precommit Not Included' : 
                                                        block === 3 ? 'Signed' : 
                                                        block === 4 ? 'Proposed' : ''
                                                    }
                                                ></div>
                                            {/each}
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <div class="d-flex justify-content-between">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-tag">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                <path d="M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                                <path d="M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z" />
                                            </svg>
                                            {dataItem.moniker}
                                        </div>
                                        <div class="d-flex justify-content-between">
                                            <div class="m-r-10">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-box-off">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                    <path d="M17.765 17.757l-5.765 3.243l-8 -4.5v-9l2.236 -1.258m2.57 -1.445l3.194 -1.797l8 4.5v8.5" />
                                                    <path d="M14.561 10.559l5.439 -3.059" />
                                                    <path d="M12 12v9" />
                                                    <path d="M12 12l-8 -4.5" />
                                                    <path d="M3 3l18 18" />
                                                </svg>
                                                <span class={dataItem.missed < 10 ? 'text-green monospace' : 'text-danger monospace'}>
                                                    {dataItem.missed}
                                                </span>
                                            </div>
                                            <div>
                                                {#if isRotating}
                                                    <!-- Rotating Hourglass SVG -->
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-hourglass flip">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                        <path d="M6.5 7h11" />
                                                        <path d="M6.5 17h11" />
                                                        <path d="M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z" />
                                                        <path d="M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z" />
                                                    </svg>
                                                {:else}
                                                    <!-- Original Block SVG -->
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-box text-green">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M12 3l8 4.5v9l-8 4.5l-8 -4.5v-9l8 -4.5" />
                                                        <path d="M12 12l8 -4.5" />
                                                        <path d="M12 12v9" />
                                                        <path d="M12 12l-8 -4.5" />
                                                    </svg>
                                                {/if}
                                                <span class="text-secondary monospace">
                                                    {dataItem.height}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
        <footer class="footer footer-transparent d-print-none">
            <div class="container-xl">
              <div class="row text-center align-items-center flex-row-reverse">
                <div class="col-lg-auto ms-lg-auto">
                  <ul class="list-inline list-inline-dots mb-0">
                    <li class="list-inline-item"><a href="https://github.com/geoddllc/validator-uptime" target="_blank" class="link-secondary" rel="noopener">Documentation</a></li>
                    <li class="list-inline-item"><a href="https://github.com/geoddllc/validator-uptime" target="_blank" class="link-secondary" rel="noopener">Source code</a></li>
                    <li class="list-inline-item">
                      <a href="https://geodd.io/" target="_blank" class="link-secondary" rel="noopener">
                        <!-- Download SVG icon from http://tabler-icons.io/i/heart -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon text-pink icon-filled icon-inline"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path></svg>
                        Geodd
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-12 col-lg-auto mt-3 mt-lg-0">
                  <ul class="list-inline list-inline-dots mb-0">
                    <li class="list-inline-item">
                      Copyright © 2024
                      All rights reserved.
                    </li>
                    <li class="list-inline-item">
                      <a href="#" class="link-secondary" rel="noopener">
                        v1.0.0-beta2
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
    </div>
</div>
