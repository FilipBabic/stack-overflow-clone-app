import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const Home = async () => {
  const session = await auth();
  console.log(session);
  return (
    <div>
      <h1 className="h1-bold">Welcome to Next JS APP</h1>
      <h1 className="h1-bold font-space-grotesk">Welcome to Next JS APP</h1>
      <p className="bg-primary-500 font-space-grotesk text-2xl">WELL DONE GIT</p>
      <form
        className="px-10 pt-[200px]"
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button type="submit">Log out</Button>
      </form>
    </div>
  );
};
export default Home;
