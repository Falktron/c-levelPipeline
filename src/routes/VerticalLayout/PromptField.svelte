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


  import { queryTargetUsers, queryTargetDB, queryBussinesModel} from '../../Flowise/flowiseServices.js';
  import { pipelineResults } from '../../helpers/store.js';
  import { executeSequence } from '../../Flowise/executeSequence.js';


   let question = $pipelineResults.prompt;
   let isLoading = false;

   const projectId = 123;

   businessModel();

  

    async function targetAudience() {
            const data = { "question": $pipelineResults.prompt };
            updateVariable("currentPipeline", "targetAudience");
            updateVariable("startPipeline", true);

            let jsonTemp;
            try {
                const response = await queryTargetUsers(data);
                jsonTemp = JSON.parse(response);
            } catch (error) {
                console.error("Error targeting audience:", error);
                updateVariable("startPipeline", false);
                throw error;
            }

            updateVariable("targetAudience", jsonTemp[0]);
    }

    async function businessModel() {
        try {
            let audienceInfo = await queryTargetDB(projectId, 'buyer_persona');
            console.log(audienceInfo);
            const data = { "question": JSON.stringify(audienceInfo) };
            updateVariable("currentPipeline", "businessModel");

            let jsonTemp;
            try {
                const response = await queryBussinesModel(data);
                console.log(response);
                //jsonTemp = JSON.parse(response);
            } catch (error) {
                console.error("Error on business model:", error);
                updateVariable("startPipeline", false);
                throw error;
            }

            //updateVariable("businessModel", jsonTemp[0]);
        } catch (error) {
            console.error("Error in businessModel function:", error);
            throw error;
        }
    }


    // Example usage with executeSequence
    const functionChain = [
    { func: targetAudience, name: 'targetAudience' },
    { func: businessModel, name: 'businessModel' }
    ];

    function executeFunctionChain() {
        executeSequence(functionChain)
        .then(() => {
            console.log("Function chain execution completed");
        })
        .catch(error => {
            console.error("Error in function chain:", error);
        });
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
                            class="form-control form-prompt"  id="formrow-prompt-input" disabled={isLoading}/>
                            </div>
                            <button disabled={!question || isLoading}  class="btn btn-primary w-md" type="submit"> Submit </button>
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
   