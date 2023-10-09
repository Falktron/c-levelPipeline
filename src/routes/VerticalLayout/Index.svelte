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
                  <div slot="header">START HERE!!</div>
                  <div class="text-muted">
                    <Row>
                      <Col lg={3}>
                        <CardTitle class="h4 mb-4">Welcome!</CardTitle>
                      </Col>
                      <Col lg={9}>
            
                            <CardTitle class="h4 mb-4">Product or service (Mandatory)</CardTitle>
                
                            <Form>
                              <FormGroup class="mb-3">
                                <Input
                                  type="text"
                                  class="form-control"
                                  id="formrow-firstname-Input"
                                />
                              </FormGroup>

                              <div>
                                <button type="submit" class="btn btn-primary w-md">
                                  Submit
                                </button>
                              </div>
                            </Form>
                        
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
