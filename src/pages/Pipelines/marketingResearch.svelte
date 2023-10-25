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
      result = value.marketingResearch;
      console.log(typeof(result), result);
    }
  });


</script>

<div class="page-flow">
  <Container fluid>
    <Breadcrumb title="Dashboard" breadcrumbItem="Marketing Research" />
    <Col xl={12}>
      <Card>
        <CardBody>
          <Row class= "p-4">
            <Col sm={8}>
              <CardTitle  class="h4 target-audience">Marketing Research</CardTitle>
              <p class="card-title-desc">Market trends, consumer preferences, and make informed
                business decisions.</p>
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
                <span class="d-none d-sm-block"> 1. Market Research Summary</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style="cursor: pointer"
                on:click={() => (customActiveTab = "2")}
                active={customActiveTab == "2"}
              >
                <span class="d-block d-sm-none">
                  <i class="far fa-user" />
                </span>
                <span class="d-none d-sm-block">2.Customer Journey</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style="cursor: pointer"
                on:click={() => (customActiveTab = "3")}
                active={customActiveTab == "3"}
              >
                <span class="d-block d-sm-none">
                  <i class="far fa-user" />
                </span>
                <span class="d-none d-sm-block">3. Brand Position</span>
              </NavLink>
            </NavItem>
          </Nav>

          <TabContent activeTab={customActiveTab} class="p-3 text-muted">
            <TabPane tabId="1" class="{customActiveTab == "1" ? 'active': ''}">
              <Row>
                <Col sm="12">
                  <CardText class="mb-0">
                    {#if result && result.market_research_summary!== null}
                        {result.market_research_summary}
                    {:else}
                        No market research summary.
                    {/if}
                  </CardText>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2" class="{customActiveTab == "2" ? 'active': ''}">
              <Row>
                <Col sm="12">
                  <CardText class="mb-0">
                    {#if result && result.customer_journey== null}
                        {result.customer_journey}
                    {:else}
                        No customer journey
                    {/if}
                  </CardText>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="3" class="{customActiveTab == "3" ? 'active': ''}">
              <Row>
                <Col sm="12">
                  <CardText class="mb-0">
                    {#if result && result.brand_position!== null}
                        {result.brand_position}
                    {:else}
                        No brand position
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



