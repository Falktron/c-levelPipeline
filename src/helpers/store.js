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
    brandIdentity: null,
    marketingPlan: null,
    marketingMessage: null,
    currentPipeline: null,
    infoUpdated: false,
});

export { user, pipelineResults };