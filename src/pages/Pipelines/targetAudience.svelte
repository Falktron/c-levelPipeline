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
</script>

<div class="page-flow">
  <Container fluid>
    <Breadcrumb title="Dashboard" breadcrumbItem="Target Audience" />
    <Col xl={12}>
      <Card>
        <CardBody>
          <Row class= "p-4">
            <Col sm={8}>
              <CardTitle class="h4">Target Audience</CardTitle>
              <p class="card-title-desc">We may need to send you critical information about our service and it is important that we have an accurate email address.</p>
            </Col>
            <Col sm={4} class="text-sm-end">
              <CardTitle class="h2">Status</CardTitle>
              <span class="badge rounded-pill badge-soft-dark">
                Not active
              </span>
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
                <span class="d-none d-sm-block">Home</span>
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
                <span class="d-none d-sm-block">Profile</span>
              </NavLink>
            </NavItem>
          </Nav>

          <TabContent activeTab={customActiveTab} class="p-3 text-muted">
            <TabPane tabId="1" class="{customActiveTab == "1" ? 'active': ''}">
              <Row>
                <Col sm="12">
                  <CardText class="mb-0">
                    Raw denim you probably haven&apos;t heard of them jean
                    shorts Austin. Nesciunt tofu stumptown aliqua, retro synth
                    master cleanse. Mustache cliche tempor, williamsburg
                    carles vegan helvetica. Reprehenderit butcher retro
                    keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui
                    irure terry richardson ex squid. Aliquip placeat salvia
                    cillum iphone. Seitan aliquip quis cardigan american
                    apparel, butcher voluptate nisi qui.
                  </CardText>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2" class="{customActiveTab == "2" ? 'active': ''}">
              <Row>
                <Col sm="12">
                  <CardText class="mb-0">
                    Food truck fixie locavore, accusamus mcsweeney&apos;s
                    marfa nulla single-origin coffee squid. Exercitation +1
                    labore velit, blog sartorial PBR leggings next level wes
                    anderson artisan four loko farm-to-table craft beer twee.
                    Qui photo booth letterpress, commodo enim craft beer
                    mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.
                    Homo nostrud organic, assumenda labore aesthetic magna
                    delectus mollit. Keytar helvetica VHS salvia yr, vero
                    magna velit sapiente labore stumptown. Vegan fanny pack
                    odio cillum wes anderson 8-bit.
                  </CardText>
                </Col>
              </Row>
            </TabPane>
              <Row>
                <Col sm="12">
                  <CardText class="mb-0">
                    Trust fund seitan letterpress, keytar raw denim keffiyeh
                    etsy art party before they sold out master cleanse
                    gluten-free squid scenester freegan cosby sweater. Fanny
                    pack portland seitan DIY, art party locavore wolf cliche
                    high life echo park Austin. Cred vinyl keffiyeh DIY salvia
                    PBR, banh mi before they sold out farm-to-table VHS viral
                    locavore cosby sweater. Lomo wolf viral, mustache
                    readymade thundercats keffiyeh craft beer marfa ethical.
                    Wolf salvia freegan, sartorial keffiyeh echo park vegan.
                  </CardText>
                </Col>
              </Row>
      
          </TabContent>
        </CardBody>
      </Card>
    </Col>
  

   
  </Container>
</div>



