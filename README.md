

# Backend MERN - Calendar
**Tech Stack:** *Node.js Express MongoDB Compass Mongoose Luxon bcrypt.js JWT.io Cors* 
## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```
    
## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Deployment

To deploy this project run

```bash
  npm run start
```


## API Reference

#### Create Event

```http
  POST /api/events
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title` | `string` | **Required**. Title event|
| `start` | `Date` | **Required**. Event Start Date|
| `end` | `Date` | **Required**. Event end date|



#### Get all Events for a user

```http
  GET /api/events
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `x-token` | `string` | **Required**. JWT of the logged user|

#### Get event for update

```http
  PUT /api/events${_id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `_id`      | `string` | **Required**. Id of event to uptate |
| `title` | `string` | **Required**. Title event|
| `start` | `Date` | **Required**. Event Start Date|
| `end` | `Date` | **Required**. Event end date|

#### Get event for delete 

```http
  DEL /api/events${_id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `_id`      | `string` | **Required**. Id of event to delete |



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`DB_CNN`

`SECRET_JWT_SEED`

## Tech Stack

**Client:** React, Redux, Bootstrap

**Server:** Node, Express MongoDB Compass 


## Authors

- [@Leeo-98](https://github.com/Lean-98)


![Logo](https://portfolio-leandropiazza.netlify.app/assets/logo-preview-7e173fba.png)

