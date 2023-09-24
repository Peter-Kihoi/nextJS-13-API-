import { Alert, Container } from "@/components/bootstrap";

export default function Home() {
  // throw new Error('This is an example error message.')
  return (

    <div>
      <h1 className="text-decoration-underline">This is home page</h1>
      <Alert>
        This Page <strong>fetches data dynamically. </strong> Every time you refresh the page, you get 
        a new image from the Unsplash API.
      </Alert>
      
    </div>
  )
}
