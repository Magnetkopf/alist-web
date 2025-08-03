import { Center, Heading, VStack, Text } from "@hope-ui/solid"
import { useManageTitle } from "~/hooks"
import { me } from "~/store"

const Dashboard = () => {
  useManageTitle("manage.sidemenu.dashboard")
  return (
    <Center h="$full" w="$full">
      <VStack spacing="$4">
        <Heading size="4xl">Welcome, {me().username}!</Heading>
        <Text fontSize="$xl" color="$neutral11">
          Have a nice day!
        </Text>
      </VStack>
    </Center>
  )
}

export default Dashboard
