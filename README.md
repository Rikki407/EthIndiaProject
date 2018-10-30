# EthIndiaProject
We are converting Digital Media ( Music, PDF, videos, images etc ) into ERC-721 tokens so that the content can be used as "currency" on the blockchain network, thus enabling it to be traded, rented and sold directly to the consumer. We are also protecting the copyrights of the content by providing the content to the consumer through an isolated channel only.


## How the Token generation works?

The content creator provides the digital media which is hashed using SHA3 and this hash is used as a metadata for ERC-721 token generation. This token is then used normally as any other cryptocoin. The price of the token depends upon the popularity of the content, thus helping the creator to earn profit. 

eg : An author publishes a Novel, this Novel is converted into a token with a Unique Name, Symbol and Characteristics. This Token (novel) is traded over the network directly and the price of the token is set according to the demand-supply scenario.


## How the Copyright protection works?

When the author uploads the content on the network, the content is not stored in it's true form, rather it is encrypted using AES algorithm using a secret key (undisclosed) and then stored on the network. When the consumer buys the token (content), the ownership of the token is transferred to the consumer and the content is provided to the consumer through an isolated environment (web app). The consumer can download the encrypted content but cannot access it through any other means except the web app itself.

The purchases of the Consumer is listed on the app and when the person wishes to access it, the App decrypts the file using the Secret key and creates a temporary copy of the file which the user can view on the App. As soon as the viewer closes the file, the temporary copy is again deleted. This ensures the authenticity of the content.

# Steps To Run
```shell
npm install
node app
```
