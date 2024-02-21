# Omninext

<p>
	<a href="https://github.com/antogno/omninext/blob/master/LICENSE"><img src="https://img.shields.io/github/license/antogno/omninext" alt="License"></a>
	<a href="https://github.com/antogno/omninext/commits"><img src="https://img.shields.io/github/last-commit/antogno/omninext" alt="Last commit"></a>
	<a href="https://github.com/antogno/omninext/releases/latest"><img src="https://img.shields.io/github/v/tag/antogno/omninext?label=last%20release" alt="Last release"></a>
</p>

Simple AWS Lambda REST API in Node.js with Serverless.

---

## Table of contents

- [Usage](#usage)
- [Deploy](#deploy)
- [API](#api)
- [License](#license)

## Usage

### Pre-requisites

Install [Serverless](https://www.serverless.com):

```console
$ npm i -g serverless
```

You'll also need Java and [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html).

### Setup

Install the dependencies:

```console
$ npm i
```

Run the following command:

```console
$ npm run init
```

Configure AWS credentials by running the following command:

```console
$ aws configure
```

You can put any value for the access key ID and the secret access key. All that matters is the region name that must be "local":

```console
AWS Access Key ID [None]: dev
AWS Secret Access Key [None]: dev
Default region name [None]: local
Default output format [None]:
```

When asked about the default output format, you can type "json" or just press enter.

### Run

```
$ npm run dev
```

The API is now accessible in [localhost:3000](http://localhost:3000).

## Deploy

To deploy this entire service via Serverless you must follow the following steps.

First, login with Serverless:

```console
$ sls login
```

Then add the following two properties at the top of the `serverless.yml` file:

```yml
org: <name of your org>
app: omninext
```

Lastly, run:

```console
$ npm run deploy
```

Now you should be able to access the API through a URL similar to [https://tly366tykj.execute-api.us-east-1.amazonaws.com](https://tly366tykj.execute-api.us-east-1.amazonaws.com).

## API

### getUserById

Returns the user with the provided ID, if exists.

```plaintext
GET /api/getUserById/{id}
```

Supported path parameters:

| Parameter | Type | Required |
| --------- | ---- | -------- |
| `id`      | uuid | Yes      |

If successful, returns `200` and the following
response properties:

| Parameter  | Type   |
| ---------- | ------ |
| `id`       | uuid   |
| `name`     | string |
| `surname`  | string |
| `username` | string |

Example request:

```shell
curl --request GET \
  --url http://localhost:3000/api/getUserById/4aa38d24-1a69-4f2b-bd92-a1a7debc1d04
```

Example response:

```json
{
	"id": "4aa38d24-1a69-4f2b-bd92-a1a7debc1d04",
	"name": "John",
	"surname": "Doe",
	"username": "johndoe"
}
```

### createUser

Creates an user with the provided data.

```plaintext
POST /api/createUser
```

Supported body parameters:

| Parameter  | Type   | Required |
| ---------- | ------ | -------- |
| `name`     | string | Yes      |
| `surname`  | string | Yes      |
| `username` | string | Yes      |

If successful, returns `201` and the following
response properties:

| Parameter  | Type   |
| ---------- | ------ |
| `id`       | uuid   |
| `name`     | string |
| `surname`  | string |
| `username` | string |

Example request:

```shell
curl --request POST \
  --url http://localhost:3000/api/createUser \
  -H 'Content-Type: application/json' \
  -d '{"name":"Foo","surname":"Bar","username":"foobar"}'
```

Example response:

```json
{
	"id": "ee62bd22-dffd-41f1-b849-05622795de80",
	"name": "Foo",
	"surname": "Bar",
	"username": "foobar"
}
```

## License

Omninext is licensed under the terms of the [Creative Commons Zero v1.0 Universal license](https://github.com/antogno/omninext/blob/master/LICENSE).

For more information, see the [Creative Commons website](https://creativecommons.org/publicdomain/zero/1.0).
