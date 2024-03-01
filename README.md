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
- [Docs](#docs)
- [License](#license)

## Usage

You can access the API at [https://g5x6nvsdj3.execute-api.us-east-1.amazonaws.com](https://g5x6nvsdj3.execute-api.us-east-1.amazonaws.com).

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

The API is now accessible at [localhost:3000](http://localhost:3000).

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

Now you should be able to access the API through a URL similar to [https://g5x6nvsdj3.execute-api.us-east-1.amazonaws.com](https://g5x6nvsdj3.execute-api.us-east-1.amazonaws.com).

## Docs

```console
$ npm run docs
```

The documentation is now accessible at [localhost:4000](http://localhost:4000).

## License

Omninext is licensed under the terms of the [Creative Commons Zero v1.0 Universal license](https://github.com/antogno/omninext/blob/master/LICENSE).

For more information, see the [Creative Commons website](https://creativecommons.org/publicdomain/zero/1.0).
