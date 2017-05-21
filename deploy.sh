#!/bin/bash
aws s3 sync ./build/ s3://artst/ --acl public-read
aws cloudfront create-invalidation --distribution-id E1DLED3991ENJ4 --paths '/*'