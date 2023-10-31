<script>
  import { Link } from "svelte-routing";
  import {
    Card,
    CardBody,
    CardText,
    CardTitle,
    Col,
    Collapse,
    Container,
    Nav,
    NavItem,
    NavLink,
    Row,
    TabContent,
    TabPane,
    Accordion,
    AccordionItem,
    Button 
  } from "sveltestrap";
  let customActiveTab = "1";
  import Breadcrumb from "../../common/Breadcrumb.svelte";
  import { pipelineResults } from '../../helpers/store.js';

  let result;
  pipelineResults.subscribe((value) => {
    if(value){
      result = value.businessModel;
      console.log(typeof(result), result);
    }
  });


</script>

<div class="page-flow">
  <Container fluid>
    <Breadcrumb title="Dashboard" breadcrumbItem="Business Model" />
    <Col xl={12}>
      <Card>
        <CardBody>
          <Row class= "p-4">
            <Col sm={8}>
              <CardTitle  class="h4 target-audience">Business Model</CardTitle>
              <p class="card-title-desc">Comprehensive document outlining business goals, 
                strategies, operations, and financial projections.</p>
            </Col>
            <Col sm={4} class="text-sm-end">
              <CardTitle class="h2">Status</CardTitle>
              {#if result}
                <span class="badge rounded-pill badge-soft-primary">
                  Complete
                </span>
              {:else}
                <span class="badge rounded-pill badge-soft-dark">
                  Not active
                </span>
              {/if}
              
            </Col>
          </Row>
        
          <Nav tabs class="nav nav-tabs nav-tabs-custom justify-content-center pt-2"
          role="tablist">
            <NavItem>
              <NavLink
                style="cursor: pointer"
                on:click={() => (customActiveTab = "1")}
                active={customActiveTab == "1"}
              >
                <span class="d-block d-sm-none">
                  <i class="fas fa-home" />
                </span>
                <span class="d-none d-sm-block"> 1. Mission Statement</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style="cursor: pointer"
                on:click={() => (customActiveTab = "2")}
                active={customActiveTab == "2"}
              >
                <span class="d-block d-sm-none">
                  <i class="fas fa-home" />
                </span>
                <span class="d-none d-sm-block"> 2. Vision Statement</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style="cursor: pointer"
                on:click={() => (customActiveTab = "3")}
                active={customActiveTab == "3"}
              >
                <span class="d-block d-sm-none">
                  <i class="fas fa-home" />
                </span>
                <span class="d-none d-sm-block"> 3. Value Proposition</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style="cursor: pointer"
                on:click={() => (customActiveTab = "4")}
                active={customActiveTab == "4"}
              >
                <span class="d-block d-sm-none">
                  <i class="fas fa-home" />
                </span>
                <span class="d-none d-sm-block"> 4. Value Proposition short</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style="cursor: pointer"
                on:click={() => (customActiveTab = "5")}
                active={customActiveTab == "5"}
              >
                <span class="d-block d-sm-none">
                  <i class="far fa-user" />
                </span>
                <span class="d-none d-sm-block">5.What is Success for This Business</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style="cursor: pointer"
                on:click={() => (customActiveTab = "6")}
                active={customActiveTab == "6"}
              >
                <span class="d-block d-sm-none">
                  <i class="far fa-user" />
                </span>
                <span class="d-none d-sm-block">6.Explaination of Business Model</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style="cursor: pointer"
                on:click={() => (customActiveTab = "7")}
                active={customActiveTab == "7"}
              >
                <span class="d-block d-sm-none">
                  <i class="far fa-user" />
                </span>
                <span class="d-none d-sm-block">7.Explaination of Business Model</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style="cursor: pointer"
                on:click={() => (customActiveTab = "8")}
                active={customActiveTab == "8"}
              >
                <span class="d-block d-sm-none">
                  <i class="far fa-user" />
                </span>
                <span class="d-none d-sm-block">8.Metrics that Matter KPIs</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style="cursor: pointer"
                on:click={() => (customActiveTab = "9")}
                active={customActiveTab == "9"}
              >
                <span class="d-block d-sm-none">
                  <i class="far fa-user" />
                </span>
                <span class="d-none d-sm-block">9. Core Problems</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style="cursor: pointer"
                on:click={() => (customActiveTab = "10")}
                active={customActiveTab == "10"}
              >
                <span class="d-block d-sm-none">
                  <i class="far fa-user" />
                </span>
                <span class="d-none d-sm-block">10. Business goals</span>
              </NavLink>
            </NavItem>
          </Nav>

          <TabContent activeTab={customActiveTab} class="p-3 text-muted">
            <TabPane tabId="1" class="{customActiveTab == "1" ? 'active': ''}">
              <Row>
                <Col sm="12">
                  <CardText class="mb-0">
                    {#if result && result.mission_statement!== null}
                        {result.mission_statement}
                    {:else}
                        No Mission Statement available
                    {/if}
                  </CardText>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2" class="{customActiveTab == "2" ? 'active': ''}">
              <Row>
                <Col sm="12">
                  <CardText class="mb-0">
                    {#if result && result.vision_statement== null}
                        {result.vision_statement}
                    {:else}
                        No Vision Statement available
                    {/if}
                  </CardText>
                </Col>
              </Row>
            </TabPane> 
            <TabPane tabId="3" class="{customActiveTab == "3" ? 'active': ''}">
              <Row>
                <Col sm="12">
                  <CardText class="mb-0">
                    {#if result && result.value_proposition!== null}
                        {result.value_proposition}
                    {:else}
                        No Value Prposition avaliable
                    {/if}
                  </CardText>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="3" class="{customActiveTab == "3" ? 'active': ''}">
              <Row>
                <Col sm="12">
                  <CardText class="mb-0">
                    {#if result && result.value_proposition!== null}
                        {result.value_proposition}
                    {:else}
                        No Value Prposition avaliable
                    {/if}
                  </CardText>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="4" class="{customActiveTab == "4" ? 'active': ''}">
              <Row>
                <Col sm="12">
                  <CardText class="mb-0">
                    {#if result && result.value_proposition_short!== null}
                        {result.value_proposition_short}
                    {:else}
                        No Value Prposition Short avaliable
                    {/if}
                  </CardText>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="5" class="{customActiveTab == "5" ? 'active': ''}">
              <Row>
                <Col sm="12">
                  <CardText class="mb-0">
                    {#if result && result.business_description!== null}
                        {result.business_description}
                    {:else}
                        No Business Description avaliable
                    {/if}
                  </CardText>
                </Col>
              </Row>
            </TabPane> 
            <TabPane tabId="6" class="{customActiveTab == "6" ? 'active': ''}">
              <Row>
                <Col sm="12">
                  <CardText class="mb-0">
                    {#if result && result.business_success!== null}
                        {result.business_success}
                    {:else}
                        No Business Success avaliable
                    {/if}
                  </CardText>
                </Col>
              </Row>
            </TabPane>  
            <TabPane tabId="7" class="{customActiveTab == "7" ? 'active': ''}">
              <Row>
                <Col sm="12">
                  <CardText class="mb-0">
                    {#if result && result.business_explanation!== null}
                        {result.business_explanation}
                    {:else}
                        No Business Explanation avaliable
                    {/if}
                  </CardText>
                </Col>
              </Row>
            </TabPane> 
            <TabPane tabId="8" class="{customActiveTab == "8" ? 'active': ''}">
              <Row>
                <Col sm="12">
                  <CardText class="mb-0">
                    {#if result && result.kpi!== null}
                        {result.kpi}
                    {:else}
                        No Business Explanation avaliable
                    {/if}
                  </CardText>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="9" class="{customActiveTab == "9" ? 'active': ''}">
              <Row>
                <Col sm="12">
                  <CardText class="mb-0">
                    {#if result && result.core_problems!== null}
                        {result.core_problems}
                    {:else}
                        No Core Problems avaliable
                    {/if}
                  </CardText>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="10" class="{customActiveTab == "10" ? 'active': ''}">
              <Row>
                <Col sm="12">
                  <CardText class="mb-0">
                    {#if result && result.business_goals!== null}
                        {result.business_goals}
                    {:else}
                        No Core Problems avaliable
                    {/if}
                  </CardText>
                </Col>
              </Row>
            </TabPane>          
          </TabContent>
        </CardBody>
      </Card>
    </Col>
  </Container>
</div>



