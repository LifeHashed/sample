import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
  <div className="text-center space-y-4 p-6 bg-white rounded-lg shadow-lg">
    <h1 className="text-2xl font-bold text-gray-800">Hi!</h1>
    <p className="text-gray-600">Welcome to the sample app</p>
    <Button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
      Let's Go to Form
    </Button>
  </div>
</div>

  );
}
