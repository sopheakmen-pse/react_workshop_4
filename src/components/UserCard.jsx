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
              Name: Teodros Girmay
            </Text>
            <Text as="div" size="2" color="gray">
              Company: Wiresk
            </Text>
            <Text as="div" size="2" color="gray">
              Email: test@test.com
            </Text>
            <Text as="div" size="2" color="gray">
              Phone: +1 123 456 7890
            </Text>
          </Box>
        </Flex>
      </Card>
    </Box>
  );
}

export default UserCard;
