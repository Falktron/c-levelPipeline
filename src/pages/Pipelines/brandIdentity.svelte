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
      result = value.brandIdentity;
      console.log(typeof(result), result);
    }
  });


</script>

<div class="page-flow">
  <Container fluid>
    <Breadcrumb title="Dashboard" breadcrumbItem="Brand Identity" />
    <Col xl={12}>
      <Card>
        <CardBody>
          <Row class= "p-4">
            <Col sm={8}>
              <CardTitle  class="h4 target-audience">Brand Indentity</CardTitle>
              <p class="card-title-desc">Distinctive visual, verbal, and experiential elements that 
                define and represent a brand's essence and values.</p>
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
                <span class="d-none d-sm-block"> 1. Brand name</span>
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
                <span class="d-none d-sm-block"> 2. Tag line</span>
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
                <span class="d-none d-sm-block"> 3. Unique Sell proposition</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style="cursor: pointer"
                on:click={() => (customActiveTab = "4")}
                active={customActiveTab == "4"}
              >
                <span class="d-block d-sm-none">
                  <i class="far fa-user" />
                </span>
                <span class="d-none d-sm-block">4. Logo</span>
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
                <span class="d-none d-sm-block">5. Colors</span>
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
                <span class="d-none d-sm-block">6. Imagery</span>
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
                <span class="d-none d-sm-block">7. Voice and Tone</span>
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
                <span class="d-none d-sm-block">8. Brand Guidelines</span>
              </NavLink>
            </NavItem>
          </Nav>

          

          <TabContent activeTab={customActiveTab} class="p-3 text-muted">
            <TabPane tabId="1" class="{customActiveTab == "1" ? 'active': ''}">
              <Row>
                <Col sm="12">
                  <CardText class="mb-0">
                    {#if result && result.brand_name!== null}
                        {result.brand_name}
                    {:else}
                        No brand name
                    {/if}
                  </CardText>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2" class="{customActiveTab == "2" ? 'active': ''}">
              <Row>
                <Col sm="12">
                  <CardText class="mb-0">
                    {#if result && result.tag_line !== null}
                        {result.tag_line}
                    {:else}
                        No Tag Line avalaible.
                    {/if}
                  </CardText>
                </Col>
              </Row>
            </TabPane> 
            <TabPane tabId="3" class="{customActiveTab == "3" ? 'active': ''}">
              <Row>
                <Col sm="12">
                  <CardText class="mb-0">
                    {#if result && result.USP!== null}
                        {result.USP}
                    {:else}
                        No Unique value proposition avaliable .
                    {/if}
                  </CardText>
                </Col>
              </Row>
            </TabPane> 
            <TabPane tabId="4" class="{customActiveTab == "4" ? 'active': ''}">
              <Row>
                <Col sm="12">
                  <CardText class="mb-0">
                    {#if result && result.logo!== null}
                        {result.logo}
                    {:else}
                        No Logo  avaliable.
                    {/if}
                  </CardText>
                </Col>
              </Row>
            </TabPane>  
            <TabPane tabId="5" class="{customActiveTab == "5" ? 'active': ''}">
              <Row>
                <Col sm="12">
                  <CardText class="mb-0">
                    {#if result && result.colors!== null}
                        {result.colors}
                    {:else}
                        No colors  avaliable.
                    {/if}
                  </CardText>
                </Col>
              </Row>
            </TabPane> 
            <TabPane tabId="6" class="{customActiveTab == "6" ? 'active': ''}">
              <Row>
                <Col sm="12">
                  <CardText class="mb-0">
                    {#if result && result.imagery!== null}
                        {result.imagery}
                    {:else}
                        No Imagery  avaliable.
                    {/if}
                  </CardText>
                </Col>
              </Row>
            </TabPane>  
            <TabPane tabId="7" class="{customActiveTab == "7" ? 'active': ''}">
              <Row>
                <Col sm="12">
                  <CardText class="mb-0">
                    {#if result && result.voice_and_tone!== null}
                        {result.voice_and_tone}
                    {:else}
                        No Voice and Tone avaliable.
                    {/if}
                  </CardText>
                </Col>
              </Row>
            </TabPane>    
            <TabPane tabId="8" class="{customActiveTab == "8" ? 'active': ''}">
              <Row>
                <Col sm="12">
                  <CardText class="mb-0">
                    {#if result && result.brand_guidelines!== null}
                        {result.brand_guidelines}
                    {:else}
                        No Brand Guidelines avaliable.
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



