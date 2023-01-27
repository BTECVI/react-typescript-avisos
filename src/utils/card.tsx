import { createStyles, SimpleGrid, Card, Image, Text, Container, AspectRatio } from '@mantine/core';

import ImgPreescolar from '/kinder.jpg'
import ImgPrepa from '/prepa.jpg'
import ImgBackground from '/background.jpg'

const mockdata = [
  {
    titulo: 'Bachillerato Tecnológico',
    imagen:
      ImgPrepa,
    seccion: 'BTECVI Villareal',
  },
  {
    titulo: 'Secundaria Técnica',
    imagen:
      ImgBackground,
    seccion: 'Colegio Bilingüe Juventus',
  },
  {
    titulo: 'Primaria',
    imagen:
      ImgBackground,
    seccion: 'Colegio Bilingüe Juventus',
  },
  {
    titulo: 'Preescolar (PROXIMAMENTE)',
    imagen:
      ImgPreescolar,
    seccion: 'Colegio Bilingüe Juventus (PROXIMAMENTE)',
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

  const cards = mockdata.map((article) => (
    <Card key={article.titulo} p="md" radius="md" component="a" href="#" style={{ border: '1px solid #dee2e6' }} className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.imagen} />
      </AspectRatio>
      <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
        {article.seccion}
      </Text>
      <Text className={classes.titulo} mt={5}>
        {article.titulo}
      </Text>
    </Card>
  ));

  return (
    <Container py="xl">
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </Container>
  );
}