#!/bin/sh
echo -e "test"
pip install awscli
aws s3 sync "./asset" "s3://brick-web/ds/$1"
