<script>

    import { onMount, onDestroy } from 'svelte';

    let monitorData = {
        name: '',
        chain_id: '',
        moniker: '',
        bonded: false,
        jailed: false,
        tombstoned: false,
        missed: 0,
        window: 0,
        nodes: 0,
        healthy_nodes: 0,
        active_alerts: 0,
        height: 0,
        blocks: []
    };

    let previousHeight = monitorData.height;
    let isRotating = true;

    async function fetchMonitorData() {
        const response = await fetch('http://203.189.67.73:8888/state'); // Update this path to your actual JSON data URL
        const data = await response.json();
        monitorData = data.Status[0];
        // Trigger animation if height has changed
        // Check for block update to stop/start hourglass rotation
        if (monitorData.height !== previousHeight) {
            isRotating = false; // Stop rotation when block updates
            previousHeight = monitorData.height;
            setTimeout(() => isRotating = true, 1000); // Start rotation again after brief pause
        }
    }

    onMount(() => {
        // Initial fetch
        fetchMonitorData();

        // Set interval to fetch every 2 seconds
        const interval = setInterval(fetchMonitorData, 2000);

        // Clear interval when component is destroyed
        onDestroy(() => clearInterval(interval));
    });
</script>

<div class="container">
    <div class="row d-flex justify-content-center p-b-30">
        <div class="col-sm-4">
            <div class="d-flex m-t-30">
                <span class="status-indicator status-green status-indicator-animated">
                    <span class="status-indicator-circle"></span>
                    <span class="status-indicator-circle"></span>
                    <span class="status-indicator-circle"></span>
                  </span>
                  <h1 class="m-b-0 p-b-0">
                    {monitorData.active_alerts === 0 ? 'All Services are operational' : 'Some Services have issues'}
                  </h1>
            </div>
        </div>
    </div>
    <div class="row d-flex justify-content-center">
        <div class="col-6">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <h3 class="card-title text-secondary">{monitorData.name} ({monitorData.chain_id})</h3>
                        <h3 class="card-title text-green">
                            {monitorData.bonded ? 'Active' : 'Inactive'}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                <path d="M9 12l2 2l4 -4" />
                              </svg>
                        </h3>
                    </div>

                  <div class="">
                    <div class="h1 m-b-5 me-2 monospace">
                        {((1 - monitorData.missed / monitorData.window) * 100).toFixed(2)}%
                    </div>
                    <div class="tracking p-b-15">
                        <div class="tracking-block bg-grey glow-background " data-bs-toggle="tooltip" ></div>
                        {#each monitorData.blocks as block}
                            <div class="tracking-block {block === 3 ? 'bg-success' : 'bg-danger'}" data-bs-toggle="tooltip" title={block === 3 ? 'Operational' : 'Downtime'}></div>
                        {/each}
                        
                        
                    </div>
                </div>
                </div>
                <div class="card-footer">
                 <div class="d-flex justify-content-between">
                    <div>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-tag"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z" /></svg>
                        {monitorData.moniker}
                    </div>
                    <div class="d-flex justify-content-between">
                        <div class="m-r-10">
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-box-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17.765 17.757l-5.765 3.243l-8 -4.5v-9l2.236 -1.258m2.57 -1.445l3.194 -1.797l8 4.5v8.5" /><path d="M14.561 10.559l5.439 -3.059" /><path d="M12 12v9" /><path d="M12 12l-8 -4.5" /><path d="M3 3l18 18" /></svg>
                            <span class={monitorData.missed < 10 ? 'text-green monospace' : 'text-danger monospace'}>
                                {monitorData.missed}
                            </span>
                        </div>
                        <div>
                            {#if isRotating}
                            <!-- Rotating Hourglass SVG -->
                            <svg 
                                xmlns="http://www.w3.org/2000/svg"
                                width="24" 
                                height="24" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                stroke-width="2" 
                                stroke-linecap="round" 
                                stroke-linejoin="round" 
                                class="icon icon-tabler icons-tabler-outline icon-tabler-hourglass flip"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M6.5 7h11" />
                                <path d="M6.5 17h11" />
                                <path d="M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z" />
                                <path d="M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z" />
                            </svg>
                        {:else}
                            <!-- Original Block SVG -->
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="icon icon-tabler icons-tabler-outline icon-tabler-box text-green"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 3l8 4.5v9l-8 4.5l-8 -4.5v-9l8 -4.5" />
                                <path d="M12 12l8 -4.5" />
                                <path d="M12 12v9" />
                                <path d="M12 12l-8 -4.5" />
                            </svg>
                        {/if}
                        <span class="text-secondary monospace">
                            {monitorData.height}
                        </span>

                        </div>
                    </div>

                 </div> 
                </div>
              </div>
        </div>

    </div>

</div>
