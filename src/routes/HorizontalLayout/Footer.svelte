<script>
    import { Row, Container , Col} from 'sveltestrap';
</script>
<footer class="footer">
    <Container fluid={true}>
      <Row>
        <Col md={6}>{new Date().getFullYear()} © </Col>
        <Col md={6} >
          <div class="text-sm-end d-none d-sm-block">
            Developer horizontal
          </div>
        </Col>
      </Row>
    </Container>
  </footer>