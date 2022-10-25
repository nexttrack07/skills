import {
  Title,
  Avatar,
  createStyles,
  SimpleGrid,
  ActionIcon,
  Divider,
  Group,
  Button,
  Card,
  Image,
  Text,
  Space,
  Badge,
} from "@mantine/core";
import {
  IconBook,
  IconHourglass,
  IconPlus,
  IconUpload,
  IconUser,
} from "@tabler/icons";
import { Layout } from "../../components/admin-layout";

const courses = [
  {
    title: "Intro to Technology",
    description:
      "A complete introduction to technology and computers aimed at beginners and newbies.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3570&q=80",
    instructor: "Faadhil Hakim",
    hours: 4,
    lessons: 28,
    stage: "Beginner",
  },
  {
    title: "Fundamentals of the Technical Interview",
    description:
      "Total understanding of the technical interview and all of it's components in order to succeed.",
    image:
      "https://images.unsplash.com/photo-1565728744382-61accd4aa148?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80",
    instructor: "Faadhil Hakim",
    hours: 6,
    lessons: 28,
    stage: "Intermediate",
  },
];

const avatars = [
  "https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4",
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80",
];

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    color: theme.colors.gray[8],
    cursor: "pointer",
    "&:hover": {
      boxShadow: theme.shadows.sm,
      transform: "scale(1.01)",
      transition: "transform ease-in-out 0.3s" 
    }
  },

  imageSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  label: {
    marginBottom: theme.spacing.md,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: -0.25,
    textTransform: "uppercase",
  },

  section: {
    padding: theme.spacing.md,
    color: theme.colors.gray[6],
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  icon: {
    marginRight: 5,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[5],
  },
}));

export default function Courses() {
  const { classes } = useStyles();
  return (
    <Layout>
      <Group>
        <Title order={2}>Courses</Title>
        <div style={{ flex: 1 }} />
        <Button leftIcon={<IconPlus />}>New Course</Button>
      </Group>
      <Divider my="xl" />
      <SimpleGrid cols={3}>
        {courses.map((course) => (
          <Card
            className={classes.card}
            key={course.title}
            withBorder
            radius="md"
          >
            <Card.Section className={classes.imageSection}>
              <Image alt={course.title} src={course.image} />
            </Card.Section>

            <Space h="md" />
            <Text weight={500}>{course.title}</Text>
            <Text size="xs" color="dimmed">
              {course.description}
            </Text>

            <Card.Section mt="md" className={classes.section}>
              <Group position="apart" spacing="lg">
                <Group spacing="xs">
                  <IconUser />
                  <Text color="dimmed" size="sm">
                    {course.instructor}
                  </Text>
                </Group>

                <Badge color="green">Beginner</Badge>

                <Group spacing="xs">
                  <IconHourglass />
                  <Text color="dimmed" size="sm">
                    {course.hours}
                  </Text>
                </Group>

                <Group spacing="xs">
                  <IconBook />
                  <Text color="dimmed" size="sm">
                    {course.lessons}
                  </Text>
                </Group>
              </Group>
            </Card.Section>

            <Group position="apart" mt="md">
              <Avatar.Group spacing="sm">
                <Avatar src={avatars[0]} radius="xl" />
                <Avatar src={avatars[1]} radius="xl" />
                <Avatar src={avatars[2]} radius="xl" />
                <Avatar radius="xl">+5</Avatar>
              </Avatar.Group>
              <ActionIcon variant="default">
                <IconUpload size={18} />
              </ActionIcon>
            </Group>
          </Card>
        ))}
      </SimpleGrid>
    </Layout>
  );
}
