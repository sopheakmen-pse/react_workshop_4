import { Box, Card, Flex, Avatar, Text } from "@radix-ui/themes";

function UserCard(props) {
  //  Hint: To insert value use {props.user.name}
  return (
    <Box width="350px">
      <Card size="1">
        <Flex gap="3" align="center">
          <Avatar size="3" radius="full" fallback="T" color="indigo" />
          <Box>
            <Text as="div" size="2" weight="bold">
              Name: {props.user.name}
            </Text>
            <Text as="div" size="2" color="gray">
              Company: {props.user.company.name}
            </Text>
            <Text as="div" size="2" color="gray">
              Email: {props.user.email}
            </Text>
            <Text as="div" size="2" color="gray">
              Phone: {props.user.phone}
            </Text>
          </Box>
        </Flex>
      </Card>
    </Box>
  );
}

export default UserCard;
