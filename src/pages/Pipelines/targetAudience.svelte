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
      result = value.targetAudience;
      console.log(typeof(result), result);
    }
  });


  
  let splitPersonas = (data) => {
    let personas = data.split(/Persona \d+: /).filter(Boolean);
    const personaDetails = [];

  // Process each persona to show them in the UI
  for (let i = 0; i < personas.length; i++) {
    const persona = personas[i].trim();
    const details = persona.split("\n\n");

    // Extract relevant information
    const name = details[0].trim().replace(":", "");
    const [demographicProfile, psychographicCharacteristics, needsAndPainPoints, motivationsAndGoals, mediaConsumptionHabits, brands, leisureActivities, notablePeople] = details.slice(1);

    // Create persona object with extracted information
    const personaObject = {
      name,
      demographicProfile,
      psychographicCharacteristics,
      needsAndPainPoints,
      motivationsAndGoals,
      mediaConsumptionHabits,
      brands,
      leisureActivities,
      notablePeople,
    };

      // Add persona object to the array
      personaDetails.push(personaObject);
      }
      console.log(personaDetails);
      return personaDetails;

  }

  
</script>

<div class="page-flow">
  <Container fluid>
    <Breadcrumb title="Dashboard" breadcrumbItem="Target Audience" />
    <Col xl={12}>
      <Card>
        <CardBody>
          <Row class= "p-4">
            <Col sm={8}>
              <CardTitle  class="h4 target-audience">Business Model</CardTitle>
              <p class="card-title-desc">Intended individuals for content, products, or services based 
                on relevant demographics and interests..</p>
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
                <span class="d-none d-sm-block"> 1. Target Audience</span>
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
                <span class="d-none d-sm-block"> 2. Psychographic Segmentation</span>
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
                <span class="d-none d-sm-block"> 3. Latent Pain Points</span>
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
                <span class="d-none d-sm-block"> 4. Dream State</span>
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
                <span class="d-none d-sm-block"> 5. Human Desires</span>
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
                <span class="d-none d-sm-block"> 6. Freud's Psychoanalytic Theory</span>
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
                <span class="d-none d-sm-block"> 7. Carl Rogers' Humanistic Theory</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style="cursor: pointer"
                on:click={() => (customActiveTab = "8")}
                active={customActiveTab == "8"}
              >
                <span class="d-block d-sm-none">
                  <i class="fas fa-home" />
                </span>
                <span class="d-none d-sm-block"> 8. Summary of Target Audience</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style="cursor: pointer"
                on:click={() => (customActiveTab = "9")}
                active={customActiveTab == "9"}
              >
                <span class="d-block d-sm-none">
                  <i class="fas fa-home" />
                </span>
                <span class="d-none d-sm-block"> 9. Summary of Psychological Insights</span>
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
                <span class="d-none d-sm-block">10.Personas</span>
              </NavLink>
            </NavItem>
          </Nav>

          <TabContent activeTab={customActiveTab} class="p-3 text-muted">
            <TabPane tabId="1" class="{customActiveTab == "1" ? 'active': ''}">
              <Row>
                <Col sm="12">
                  <CardText class="mb-0">
                    {#if result && result.target_audience!== null}
                        {result.target_audience}
                    {:else}
                        No target audience available
                    {/if}
                  </CardText>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2" class="{customActiveTab == "2" ? 'active': ''}">
              <Row>
                <Col sm="12">
                  <CardText class="mb-0">
                    {#if result && result.psycho_segmentation!== null}
                        {result.psycho_segmentation}
                    {:else}
                        No Psychographic Segmentation available
                    {/if}
                  </CardText>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="3" class="{customActiveTab == "3" ? 'active': ''}">
              <Row>
                <Col sm="12">
                  <CardText class="mb-0">
                    {#if result && result.latent_points!== null}
                        {result.latent_points}
                    {:else}
                        No Latent points pain available
                    {/if}
                  </CardText>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="4" class="{customActiveTab == "4" ? 'active': ''}">
              <Row>
                <Col sm="12">
                  <CardText class="mb-0">
                    {#if result && result.dream_state!== null}
                        {result.dream_state}
                    {:else}
                        No Dream state available
                    {/if}
                  </CardText>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="5" class="{customActiveTab == "5" ? 'active': ''}">
              <Row>
                <Col sm="12">
                  <CardText class="mb-0">
                    {#if result && result.human_desire!== null}
                        {result.human_desire}
                    {:else}
                        No Human desire available
                    {/if}
                  </CardText>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="6" class="{customActiveTab == "6" ? 'active': ''}">
              <Row>
                <Col sm="12">
                  <CardText class="mb-0">
                    {#if result && result.freud_theory!== null}
                        {result.freud_theory}
                    {:else}
                        No Freud's Psychoanalytic Theory available
                    {/if}
                  </CardText>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="7" class="{customActiveTab == "7" ? 'active': ''}">
              <Row>
                <Col sm="12">
                  <CardText class="mb-0">
                    {#if result && result.carl_rogers!== null}
                        {result.carl_rogers}
                    {:else}
                        No Carl Rogers' Humanistic Theory available
                    {/if}
                  </CardText>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="8" class="{customActiveTab == "8" ? 'active': ''}">
              <Row>
                <Col sm="12">
                  <CardText class="mb-0">
                    {#if result && result.audience_summary!== null}
                        {result.audience_summary}
                    {:else}
                        No audience summary  available
                    {/if}
                  </CardText>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="9" class="{customActiveTab == "9" ? 'active': ''}">
              <Row>
                <Col sm="12">
                  <CardText class="mb-0">
                    {#if result && result.psycological_summary!== null}
                        {result.psycological_summary}
                    {:else}
                        No psychological summary available
                    {/if}
                  </CardText>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="10" class="{customActiveTab == "10" ? 'active': ''}">
              <Row>
                <Col sm="12">
                  <CardText class="mb-0">
                    {#if result && result.buyer_persona !== null}
                        {#each splitPersonas(result.buyer_persona)  as personaObject } 
                          <div class="card">
                            <div class="card-body">
                              <h5 class="card-title">{personaObject.name}</h5>
                          
                              <h6>Demographic Profile</h6>
                              <p>{personaObject.demographicProfile}</p>
                          
                              <h6>Psychographic Characteristics</h6>
                              <p>{personaObject.psychographicCharacteristics}</p>
                          
                              <h6>Needs and Pain Points</h6>
                              <p>{personaObject.needsAndPainPoints}</p>
                          
                              <h6>Motivations and Goals</h6>
                              <p>{personaObject.motivationsAndGoals}</p>
                          
                              <h6>Media Consumption Habits</h6>
                              <p>{personaObject.mediaConsumptionHabits}</p>
                          
                              <h6>Brands They Resonate With</h6>
                              <p>{personaObject.brands}</p>
                          
                              <h6>Leisure Activities</h6>
                              <p>{personaObject.leisureActivities}</p>
                          
                              <h6>Celebrities or Notable People They Resonate With</h6>
                              <p>{personaObject.notablePeople}</p>
                            </div>
                          </div>
                        {/each}
                    {:else}
                        No buyer personas  available
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



