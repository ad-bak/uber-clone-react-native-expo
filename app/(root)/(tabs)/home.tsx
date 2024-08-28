import RideCard from "@/components/RideCard";
import { rides } from "@/mock/rides";
import { useUser } from "@clerk/clerk-expo";
import { FlatList } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
  const { user } = useUser();

  return (
    <SafeAreaView>
      <FlatList
        data={rides.slice(0, 5)}
        renderItem={({ item }) => <RideCard ride={item} />}
      />
    </SafeAreaView>
  );
}
