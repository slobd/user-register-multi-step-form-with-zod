
## Getting Started

First, install run the development server:

```bash
yarn install
# and then
yarn dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Description
We assume that we are staring on the first page of the form.

### -First page: 
This is user detail page that consists of user's first name, last name, email and password.
I implemented the validations for each fields using react-hook-form and zod.
- firstName and lastName: required
- email: required and email format validation
- password: 6+ characters, password strength, password 

### -Second Page
This is profile info page for uploading bio and avatar.
- Bio: min-10, max-300 characters, 
- Profile Picture: required.
    Regarding profile picture, actual file uploading is not happening. 
    If you want this function, I can implement file upload with the node.js/mongodb backend shortly.

### -Third Page
This is page for notification and privacy settings.

Once you complete and click the "Next" button, the whole user data is saved via mock API.

### -Fourth Page
This is success page.
Once the API connection is succeed, the modal appears to congratulate your register.
And then, show the result of the user profile.
All parts are read-only.

We can add further functionalify or page by clicking next button on this page.
#


That's all.
Thank you.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
