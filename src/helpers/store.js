import { writable } from 'svelte/store';

const user = writable({ 
    loggedIn: false ,
});

const pipelineResults = writable({ 
    prompt: '',
    startPipeline: false,
    targetAudience: null,
    businessModel: null,
    marketingResearch: null,
    currentPipeline: null,
});

export { user, pipelineResults };