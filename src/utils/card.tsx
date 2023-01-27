import { createStyles, SimpleGrid, Card, Image, Text, Container, AspectRatio } from '@mantine/core';

import ImgPreescolar from '/kinder.jpg'
import ImgPrepa from '/prepa.jpg'
import ImgBackground from '/background.jpg'

import { Link } from 'react-router-dom'

const mockdata = [
  {
    titulo: 'Bachillerato Tecnológico',
    imagen:
      ImgPrepa,
    seccion: 'BTECVI Villareal',
    link: '/secciones/bachillerato',
  },
  {
    titulo: 'Secundaria Técnica',
    imagen:
      'https://usc1.contabostorage.com/4dff45e2e3c74b3ba6ff7cc8146f2c3a:btecvi/navidad.jpg',
    seccion: 'Colegio Bilingüe Juventus',
    link: '/secciones/secundaria',
  },
  {
    titulo: 'Primaria (PROXIMAMENTE)',
    imagen:
      ImgBackground,
    seccion: 'Colegio Bilingüe Juventus (PROXIMAMENTE)',
    link: '/',
  },
  {
    titulo: 'Preescolar (PROXIMAMENTE)',
    imagen:
      ImgPreescolar,
    seccion: 'Colegio Bilingüe Juventus (PROXIMAMENTE)',
    link: '/',
  },
];

const useStyles = createStyles((theme) => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',

    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: theme.shadows.md,
    },
  },

  titulo: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
}));

export function ArticlesCardsGrid() {
  const { classes } = useStyles();

  const cards = mockdata.map((seccion) => (
    <Link to={seccion.link} key={seccion.titulo}>
    <Card key={seccion.titulo} p="md" radius="md" style={{ border: '1px solid #dee2e6' }} className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        <Image src={seccion.imagen} />
      </AspectRatio>
      <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
        {seccion.seccion}
      </Text>
      <Text className={classes.titulo} mt={5}>
        {seccion.titulo}
      </Text>
    </Card>
    </Link>
  ));

  return (
    <Container py="xl">
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </Container>
  );
}