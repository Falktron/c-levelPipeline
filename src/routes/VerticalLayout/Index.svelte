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

  import Navbar from "./NavbarLLM.svelte";
  import Header from "./HeaderLLM.svelte";
  import Footer from "./Footer.svelte";
  import Rightbar from "../../Components/RightbarLLM.svelte";

  import { queryTargetUsers } from '../../Flowise/flowiseServices.js';
  import { pipelineResults } from '../../Flowise/pipelineResults.js';
  queryTargetUsers



  // Get target
  function sendQueryTarget(prompt) {
		const data = { "question": prompt };
    alert(`answered question "${prompt}"`);
    isLoading = true; //
		queryTargetUsers(data).then((response) => {
			pipelineResults.set(response);
      isLoading = false; //
      console.log(typeof(response), response);
		});
	}


  let question = '';
  let isLoading = false;


  // Get results of each prompt

  let open = false;

</script>

<div id="layout-wrapper">
  <Header bind:sidebar={open} />
  <Navbar />
  <div class="main-content" id="maincontent">
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
                            <form on:submit|preventDefault={sendQueryTarget(question)}>
                              <div class="mb-3">
                                <textarea bind:value={question}   placeholder= "Describe the product of service of your company"
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
    <slot />
  </div>
  <Footer />

  <Rightbar layout="vertical" bind:open />
</div>
