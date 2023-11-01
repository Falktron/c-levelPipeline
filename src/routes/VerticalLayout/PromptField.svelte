<script>
    import {
    Card,
    CardBody,
    CardTitle,
    Col,
    Row,
    Accordion,
    AccordionItem, 
    Container,
    FormGroup,
    Label,
    Button,
    Form,
    Input,
    InputGroupText,
    InputGroup,
  } from "sveltestrap";


  import { queryTargetUsers, queryTargetDB, queryBusinessModel, queryMarketingResearch, queryBrandIdentity} from '../../Flowise/flowiseServices.js';
  import { pipelineResults } from '../../helpers/store.js';
  import { onMount } from 'svelte';


   let question = $pipelineResults.prompt;
   let isLoading = false;

   const projectId = 123;

  
   const queries = [
    { key: "targetAudience", type: "target_audience" },
    { key: "businessModel", type: "business_model" },
    { key: "marketingResearch", type: "market_research" },
    { key: "brandIdentity", type: "brand_identity" }
  ];

  onMount(async () => {
    if (!$pipelineResults.infoUpdated) {
      try {
        console.log('Project loaded!');

        for (const query of queries) {
          const data = await queryTargetDB(projectId, query.type);
          if (data) {
            updateVariable(query.key, data);
          }
        }

        updateVariable("infoUpdated", true);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  });



  

    async function targetAudience() {
            const data = { "question": $pipelineResults.prompt };
            console.log(data);
            updateVariable("currentPipeline", "targetAudience");
            updateVariable("startPipeline", true);
            let response;
            try {
                response = await queryTargetUsers(data);
                updateVariable("targetAudience", response);
                console.log(response);
            } catch (error) { 
                throw error;
            }

         
    }


    async function businessModel() {
        try {
            let audienceInfo = await queryTargetDB(projectId, 'target_audience');
            const { product_service, psycological_summary,audience_summary,target_audience } = audienceInfo;
            const reqInfo = { product_service, psycological_summary,audience_summary,target_audience };
            const data = { "question": JSON.stringify(reqInfo) };
            updateVariable("currentPipeline", "businessModel");
            let response;
            try {
                response = await queryBusinessModel(data);
                updateVariable("businessModel", response);
                console.log(response);
              
            } catch (error) {
               
                throw error;
            }

           
        } catch (error) {
            throw error;
        }
    }

    async function marketingResearch() {
        try {

            // prpate infor for quering
            let businessInfo = await queryTargetDB(projectId, 'business_model');
            let audienceInfo = await queryTargetDB(projectId, 'target_audience');


            const { product_service, psycological_summary,audience_summary,target_audience } = audienceInfo;
            const { value_proposition_short,business_success } = businessInfo;
            let reqInfo = { product_service, psycological_summary,audience_summary,target_audience , value_proposition_short,business_success};
            const data = { "question": JSON.stringify(reqInfo) };
            updateVariable("currentPipeline", "marketingResearch");
            let response;
            try {
                response = await queryMarketingResearch(data);
                updateVariable("marketingResearch", response);
                console.log(response);
                
            } catch (error) {
                throw error;
            }

           
        } catch (error) {
            throw error;
        }
    }


    async function brandIdentity() {
        try {

            // prpate infor for quering
            let businessInfo = await queryTargetDB(projectId, 'business_model');
            let audienceInfo = await queryTargetDB(projectId, 'target_audience');


            const { product_service,audience_summary } = audienceInfo;
            const { value_proposition,competitive_analysis, mission_statement, vision_statement} = businessInfo;
            let reqInfo = { product_service, audience_summary, value_proposition,competitive_analysis, mission_statement, vision_statement};
            const data = { "question": JSON.stringify(reqInfo) };
            updateVariable("currentPipeline", "brandIdentity");
            let response;
            try {
                response = await queryBrandIdentity(data);
                updateVariable("brandIdentity", response);
                console.log(response);
                
            } catch (error) {
                throw error;
            }

           
        } catch (error) {
            throw error;
        }
    }





    // Example usage with executeSequence
    const functionChain = [
    { func: targetAudience, name: 'targetAudience' },
    { func: businessModel, name: 'businessModel' },
    { func: marketingResearch, name: 'marketingResearch' },
    { func: brandIdentity, name: 'brandIdentity'}
    ];


    async function executeFunctionChain() {
        try {
            for (const func of functionChain) {
            await func.func();
            console.log(`Function ${func.name} executed successfully`);
            }
            console.log("Function chain execution completed");
        } catch (error) {
            updateVariable("startPipeline", false);
            console.error(`Error in function chain: ${error}`);
        }
    }
    






    function updateVariable(variable, newValue) {
        pipelineResults.set({ ...$pipelineResults, [variable] : newValue});
        isLoading = $pipelineResults.startPipeline
        console.log($pipelineResults);

    }



</script>

<Row>
    <Card>
    <CardBody>
        <Row>
        <Col lg={12}>
            <h5 class="font-size-14">Accordions</h5>
            <p class="card-title-desc">
            Extend the default collapse behavior to create an accordion.
            </p>
            <Accordion class="custom-accordion">
            <AccordionItem active>
                <div class="header-prompt"  slot="header">
                <Row>
                    <Col sm={2}>
                    START HERE!!
                    </Col>
                    <Col sm={8} class="text-sm-center "  >
                    <h5 class="h6 {isLoading ? "running-going":"running-stop"} ">
                        <i class="mdi mdi-alert-circle-outline me-3" />BUILDING RESULTS
                    </h5>
                    </Col>
                </Row>
                </div>
                <div class="text-muted">
                <Row class="p-4">
                    <Col lg={4} >
                    <h5 class="font-size-15  headlines-global">Welcome back !</h5>
                    Start with a simple prompt

                    <div class="text-muted mt-4">
                            <p>
                            <i class="mdi mdi-chevron-right text-primary me-1" />
                            Efficient, intuitive, effortless.
                            </p>
                            <p>
                            <i class="mdi mdi-chevron-right text-primary me-1" />
                            Simple inputs for wealth generation.
                            </p>
    
                    </div>
                    </Col>
                    <Col lg={8} class="text-sm-end">
                        <CardTitle class="h4 mb-4">Product or service (Mandatory)</CardTitle>
                        <form on:submit|preventDefault={executeFunctionChain}>
                            <div class="mb-3">
                            <textarea bind:value={question} on:input={updateVariable("prompt",question)}  placeholder= "Describe the product of service of your company"
                            class="form-control form-prompt"  id="formrow-prompt-input" disabled={$pipelineResults.startPipeline}/>
                            </div>
                            <button disabled={!question || $pipelineResults.startPipeline}  class="btn btn-primary w-md" type="submit"> Submit </button>
                        </form>
                    
                    </Col>
            
                </Row>
            </div>
            </AccordionItem>
            </Accordion>
        </Col>
        </Row>
    </CardBody>
    </Card>
</Row>
   