import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {
  AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, Container, Divider, Grid, List,
  ListItem, ListItemText, ListItemButton, ListSubheader, Paper, TextField, Toolbar, Typography
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const cards = [1, 2, 3, 4];

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative" color="inherit">
        <Toolbar>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            noWrap
            sx={{ flex: 1 }}
          >
            Dio Shopping
          </Typography>
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#CartModal">
            <span><i className="fas fa-shopping-cart"></i></span>
            <span className="badge rounded-pill bg-info text-dark">3</span>
          </button>
          {/* Modal */}
          <div class="modal fade" id="CartModal" tabindex="-1" aria-labelledby="CartModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 className="modal-title" id="CartModalLabel">Meu Carrinho</h5>
                  <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                <div className="modal-body table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col"></th>
                        <th scope="col">Produto</th>
                        <th scope="col">Qtd</th>
                        <th scope="col">Preço</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th><button className="badge bg-danger"><i className="fas fa-window-close"></i></button></th>
                        <th><img className="img-fluid img-thumbnail" src="./images/produtos/real_treino.jpg" alt="Flamengo 2020" width="50px" /></th>
                        <th><span className="badge badge-pill bg-warning">2</span></th>
                        <th>R$ 100.00</th>
                        <th><button className="badge badge-pill bg-primary"><i className="fas fa-plus"></i></button></th>
                        <th><button className="badge badge-pill bg-danger"><i className="fas fa-minus"></i></button></th>
                        <th>R$ 200.00</th>
                      </tr>
                      <tr>
                        <th colSpan="2" scope="col">Total</th>
                        <th colSpan="3">2 itens</th>
                        <th colSpan="2">R$ 200.00</th>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </Toolbar>

      </AppBar>
      <Container maxWidth="lg">
        <main>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Grid item xs={12} md={4}>
              <Paper elevation={0} sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Categoria
                </Typography>

                <Divider />
                <List>
                  <ListSubheader>Times Nacionais</ListSubheader>
                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                      <ListItemText primary="3" />
                    </ListItemButton>
                  </ListItem>
                </List>
                <List>
                  <ListSubheader>Times Internacionais</ListSubheader>
                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                      <ListItemText primary="3" />
                    </ListItemButton>
                  </ListItem>
                </List>
                <List>
                  <ListSubheader>Times Históricos</ListSubheader>
                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                      <ListItemText primary="3" />
                    </ListItemButton>
                  </ListItem>
                </List>

              </Paper>
            </Grid>

            <Grid
              item
              xs={12}
              md={8}
              sx={{
                '& .markdown': {
                  py: 3,
                },
              }}
            >
              <Grid container spacing={2}>
                {cards.map((card) => (
                  <Grid item key={card} xs={12} sm={6} md={3}>
                    <Card
                      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                      <CardMedia
                        component="img"
                        image="./images/produtos/corinthians.jpeg"
                        alt="produto"
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                          Produto
                        </Typography>
                        <Typography>
                          R$ 99,00
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button fullWidth variant="contained" size="small">Adicionar</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>

          </Grid>
        </main>
        <Box
          sx={{
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Typography component="h1" variant="h5">
            Contato
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              name="nome"
              label="Nome"
              id="outlined-size-normal"
            />
            <TextField
              margin="normal"
              fullWidth
              name="mensagem"
              label="Mensagem"
              id="outlined-size-normal"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Enviar
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
