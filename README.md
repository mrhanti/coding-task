## Task Description

In Gustav, whenever a job is created, it can be shared with vendors who can then supply candidates for the job.
There are multiple scopes that can be selected for job sharing:
- global - the job becomes a part of global marketplace and is visible to every vendor
- internal - job is not visible outside of the company that it belongs to
- all vendors
- individual vendor companies
- vendor circles - these are used to group vendor partners; sharing job with a circle makes it visible to every vendor who belongs to it
- combination of vendors and circles

Your task is to buld a React component that will allow the user to define the sharing settings for a job.

You will need to use the following API endpoints to fetch the data:
- https://mock.hellogustav.com/vendors - returns a list of all available vendors; every vendor has a name and id
- https://mock.hellogustav.com/circles - returns a list of circles; the circle has id, name and a list of vendor ids that belong to it

The changes should be submitted to the following endpoint:
- https://mock.hellogustav.com/jobs using POST request;
  The request body should be a JSON in following format:
  ```js
  {
    global: false,
    internal: false,
    all_vendors: false,
    vendors: ["uwqqN4qMJ4RAx6WLyEBGAe", "NeZNQJxeMkCHCpiPK2XpDA"],
    circles: ["PadPa7JHRILRDMxYfGexZp"]
  }
  ```

You can use following components:
- `Icon`, which accepts two props:
  - `color` (string)
  - `icon` (one of the following: ['globe', 'vendors', 'cicle', 'internal', 'clock', 'warning'])
- `InfoBox`, which requires you to pass:
  - `text` (string)
  - `icon` (one of the following: ['globe', 'vendors', 'cicle', 'internal', 'clock', 'warning'])
- `Toggle`, for selecting the sharing scope (example of its usage can be found in the `App` component)

Selecting `Global` or `Internal` scope should set appropriate flag to `true` and both lists (`vendors` and `circles`) should be empty.

One the `Select vendors` tab, the logic should be as follows:
- left columns displays the "All vendor partners" item and a list of circles below it
- selecting "All vendor partners" loads a list of all vendors (from the /vendors endpoint) in the middle column
  - ticking the checkbox next to a vendor's name adds them to a list of individual vendors
  - clicking on the "Select all your vendor partners" sets the `all_vendors` flag to true and greys out all the vendors on the list
- selecting a circle on in the left column loads a list of vendors who belong to that circle into the middle column
  - ticking the checkbox next to a vendor's name adds them to a list of individual vendors
  - clicking on the "Select entire circle" adds its id to the `circles` list
  - clicking on the "Select all individually" link adds all vendors from the circle to the `vendors` list
- right columns shows the summary



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
