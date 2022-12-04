import Navigationbar from "../components/Navigationbar"
import AllProfiles from "../components/profiles/AllProfiles"

function AllProfilesPage() {
  return (
    <div className="w-full px-[70px]">
        <Navigationbar />
        <div className="flex flex-col items-center w-full mt-[70px]">
          <h1 className="mt-[7] mb-[70px]">All Profiles</h1>
          <AllProfiles />
        </div>
    </div>
  )
}

export default AllProfilesPage