# 📅Calendar-App MERN  | API-Backend 
Calendar-API-Backend is a backend built with Node.js, Express and MongoDB, following an architecture based on the Model-Controller-View (MCV) pattern. This API uses tools such as bcrypt.js for password encryption, JWT for user authentication and Cors for managing requests between different sources.
This backend provides a solid and secure foundation for the Calendar-App application, enabling efficient event and user management. With its MCV-based structure, it offers a clear separation of concerns and optimal scalability. Furthermore, being built with MERN technologies, it ensures a seamless integration with the frontend and a cohesive user experience.

## Tech Stack 
*Node.js, Express, MongoDB Compass, Mongoose, Luxon, bcrypt.js, JWT.io, Cors* 
*Architecture: MVC*

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

## Authors

- [@Leeo-98](https://github.com/Lean-98)



