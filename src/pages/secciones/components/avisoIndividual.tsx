import { IconEye, IconCalendarTime } from '@tabler/icons-react';
import { Card, Text, Group, Center, createStyles } from '@mantine/core';

import { Link } from 'react-router-dom';

const useStyles = createStyles((theme, _params, getRef) => {
  const image: any = getRef('image');

  return {
    card: {
      position: 'relative',
      height: 280,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      margin: '10px',
      [`&:hover .${image}`]: {
        transform: 'scale(1.03)',
      },
    },

    image: {
      ref: image,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundSize: 'cover',
      transition: 'transform 500ms ease',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
    },

    overlay: {
      position: 'absolute',
      top: '20%',
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .85) 90%)',
    },

    content: {
      height: '100%',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      zIndex: 1,
    },

    titulo: {
      color: theme.white,
      marginBottom: 5,
    },

    bodyText: {
      color: theme.colors.dark[2],
      marginLeft: 7,
    },

    autor: {
      color: theme.colors.dark[2],
    },
  };
});

interface Props {
  link: string;
  image: string;
  titulo: string;
  autor: string;
  visitas: number;
  horaPublicada: number;
}

export function AvisoIndividual({ image, titulo, autor, visitas, horaPublicada, link }: Props) {
  const { classes, theme } = useStyles();
  console.log(horaPublicada)

  return (
    <Link to={link} key={link} style={{ width: '500px' }}>
      <Card
        p="lg"
        shadow="lg"
        className={classes.card}
        radius="md"
      >
        <div className={classes.image} style={{ backgroundImage: `url(${image})` }} />
        <div className={classes.overlay} />

        <div className={classes.content}>
          <div>
            <Text size="lg" className={classes.titulo} weight={500}>
              {titulo}
            </Text>

            <Group position="apart" spacing="xs">
              <Text size="sm" className={classes.autor}>
                {autor}
              </Text>

              <Group spacing="lg">
                <Center>
                  <IconEye size={16} stroke={1.5} color={theme.colors.dark[2]} />
                  <Text size="sm" className={classes.bodyText}>
                    {visitas}
                  </Text>
                </Center>
                <Center>
                  <IconCalendarTime size={16} stroke={1.5} color={theme.colors.dark[2]} />
                  <Text size="sm" className={classes.bodyText}>
                    Hace un momento
                  </Text>
                </Center>
              </Group>
            </Group>
          </div>
        </div>
      </Card>
    </Link>
  );
}