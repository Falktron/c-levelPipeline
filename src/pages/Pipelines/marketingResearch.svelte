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
  import { getClosestAvailableLocale } from "svelte-i18n/types/runtime/stores/dictionary";

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
                <span class="d-none d-sm-block"> 1. Needs Analysis</span>
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
                <span class="d-none d-sm-block"> 2. Market Trend Analysis </span>
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
                <span class="d-none d-sm-block"> 3. Competitive Analysis</span>
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
                <span class="d-none d-sm-block"> 4. Market Research Summary</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style="cursor: pointer"
                on:click={() => (customActiveTab = "5")}
                active={customActiveTab == "5"}
              >
                <span class="d-block d-sm-none">
                  <i class="fas fa-home" />
                </span>
                <span class="d-none d-sm-block"> 5. Customer Journey</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style="cursor: pointer"
                on:click={() => (customActiveTab = "6")}
                active={customActiveTab == "6"}
              >
                <span class="d-block d-sm-none">
                  <i class="fas fa-home" />
                </span>
                <span class="d-none d-sm-block"> 6. Brand Position</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style="cursor: pointer"
                on:click={() => (customActiveTab = "7")}
                active={customActiveTab == "7"}
              >
                <span class="d-block d-sm-none">
                  <i class="fas fa-home" />
                </span>
                <span class="d-none d-sm-block"> 7. Brand Position</span>
              </NavLink>
            </NavItem>
          </Nav>

          <TabContent activeTab={customActiveTab} class="p-3 text-muted">
            <TabPane tabId="1" class="{customActiveTab == "1" ? 'active': ''}">
              <Row>
                <Col sm="12">
                  <CardText class="mb-0">
                    {#if result && result.needs_analysis!== null}
                        {result.needs_analysis}
                    {:else}
                        No Needs Analysis avaliable.
                    {/if}
                  </CardText>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2" class="{customActiveTab == "2" ? 'active': ''}">
              <Row>
                <Col sm="12">
                  <CardText class="mb-0">
                    {#if result && result.market_size== null}
                        {result.market_size}
                    {:else}
                        No Market Size avalaible.
                    {/if}
                  </CardText>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="3" class="{customActiveTab == "3" ? 'active': ''}">
              <Row>
                <Col sm="12">
                  <CardText class="mb-0">
                    {#if result && result.market_trend!== null}
                        {result.market_trend}
                    {:else}
                        No Market Trend avaliable.
                    {/if}
                  </CardText>
                </Col>
              </Row>
            </TabPane> 
            <TabPane tabId="4" class="{customActiveTab == "4" ? 'active': ''}">
              <Row>
                <Col sm="12">
                  <CardText class="mb-0">
                    {#if result && result.competetive_analysis!== null}
                        {result.competetive_analysis}
                    {:else}
                        No Market Trend avaliable.
                    {/if}
                  </CardText>
                </Col>
              </Row>
            </TabPane>  
            <TabPane tabId="5" class="{customActiveTab == "5" ? 'active': ''}">
              <Row>
                <Col sm="12">
                  <CardText class="mb-0">
                    {#if result && result.market_research_summary!== null}
                        {result.market_research_summary}
                    {:else}
                        No Market Research Summary avaliable.
                    {/if}
                  </CardText>
                </Col>
              </Row>
            </TabPane>   
            <TabPane tabId="6" class="{customActiveTab == "6" ? 'active': ''}">
              <Row>
                <Col sm="12">
                  <CardText class="mb-0">
                    {#if result && result.customer_journey!== null}
                        {result.customer_journey}
                    {:else}
                        No Customer Journey avaliable.
                    {/if}
                  </CardText>
                </Col>
              </Row>
            </TabPane>  
            <TabPane tabId="7" class="{customActiveTab == "7" ? 'active': ''}">
              <Row>
                <Col sm="12">
                  <CardText class="mb-0">
                    {#if result && result.brand_positioning!== null}
                        {result.brand_positioning}
                    {:else}
                        No Customer Journey avaliable.
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



