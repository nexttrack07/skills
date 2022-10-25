import { Layout } from "../../../components/admin-layout";
import {
  Breadcrumbs,
  Text,
  Anchor,
  Space,
  Title,
  Divider,
  Group,
  Box,
  List,
  DEFAULT_THEME,
  SimpleGrid,
  useMantineTheme,
  Accordion,
} from "@mantine/core";
import {
  IconBook2,
  IconCameraPlus,
  IconClipboard,
  IconHourglass,
  IconPhoto,
  IconPrinter,
  IconSquareCheck,
} from "@tabler/icons";

const DATA = {
  title: "Introduction to Technology",
  lessons: 24,
  quizzes: 18,
  hours: 4,
  objectives: [
    "Acquire fundamental skills of computers",
    "Learn how to manage files and folders",
    "Understand the fundamentals of the web",
    "Learn about the command line and it's importance",
    "Learn multiple ways to install and uninstall apps and programs",
    "Learn the most popular keyboard shortcus",
    "Learn about code editors and how to install them",
    "Learn about version control and git",
  ],
  overview: `This beginner course on computers and
            technology is your guide to understanding
            and using computers. This course can either be
            taken by itself or as a prerequisite for any of our
            other larger cohorts.\nIn this course you will learn how use a
computer effectively for programming. This course will not teach you programming but it will
prepare you for a taking a coding course. Think of this course as a prerequisite for a coding bootcamp.`,
};

export default function CourseDetail({
  course = DATA,
}: {
  course?: {
    title: string;
    quizzes: number;
    hours: number;
    lessons: number;
    objectives: string[];
    overview: string;
  };
}) {
  const theme = useMantineTheme();
  const getColor = (color: string) =>
    theme.colors[color][theme.colorScheme === "dark" ? 5 : 7];

  const items = [
    { title: "Courses", href: "/admin/courses" },
    { title: course.title, href: "#" },
  ].map((item, index) => (
    <Anchor href={item.href} key={index} sx={{ textTransform: "capitalize" }}>
      {item.title}
    </Anchor>
  ));

  return (
    <Layout>
      <Breadcrumbs separator="→">{items}</Breadcrumbs>
      <Space h="xl" />
      <Title order={1}>{course.title}</Title>
      <Group sx={(theme) => ({ color: theme.colors.gray[6] })} mt="md">
        <Group spacing="xs">
          <IconBook2 />
          <Text>{course.lessons} Lessons</Text>
        </Group>
        <Group spacing="xs">
          <IconClipboard />
          <Text>{course.quizzes} Quizzes</Text>
        </Group>
        <Group spacing="xs">
          <IconHourglass />
          <Text>{course.hours} Hours</Text>
        </Group>
      </Group>

      <Divider my="xl" />

      <Title order={2}>Learning Objectives</Title>
      <Box
        sx={(theme) => ({
          borderColor: theme.colors.gray[4],
          borderWidth: 1,
          borderRadius: 5,
          borderStyle: "solid",
          marginTop: theme.spacing.lg,
          padding: theme.spacing.sm,
          shadow: "0 0 3px rgba(0,0,0,0.4)",
        })}
      >
        <List icon={<IconSquareCheck color={DEFAULT_THEME.colors.blue[7]} />}>
          <SimpleGrid cols={2}>
            {course.objectives.map((obj) => (
              <List.Item key={obj}>{obj}</List.Item>
            ))}
          </SimpleGrid>
        </List>
      </Box>

      <Space my="xl" />
      <Title order={2}>Course Overview</Title>
      <Text mt="xl">{course.overview}</Text>

      <Space my="xl" />
      <Title order={2}>Course Contents</Title>

      <Accordion mt="xl" sx={{ width: "80%" }} variant="contained">
        <Accordion.Item value="photos">
          <Accordion.Control
            icon={<IconPhoto size={20} color={getColor("red")} />}
          >
            Recent photos
          </Accordion.Control>
          <Accordion.Panel>Content</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="print">
          <Accordion.Control
            icon={<IconPrinter size={20} color={getColor("blue")} />}
          >
            Print photos
          </Accordion.Control>
          <Accordion.Panel>Content</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="camera">
          <Accordion.Control
            icon={<IconCameraPlus size={20} color={getColor("teal")} />}
          >
            Camera settings
          </Accordion.Control>
          <Accordion.Panel>Content</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Layout>
  );
}
