provider "aws" {
  region = "eu-north-1"
}

# 1. Create the S3 Bucket
resource "aws_s3_bucket" "portfolio" {
  bucket = "mustansar.haseebxbiz.dev"
}

# 2. Setup Static Web Hosting
resource "aws_s3_bucket_website_configuration" "hosting" {
  bucket = aws_s3_bucket.portfolio.id
  index_document {
    suffix = "index.html"
  }
}

# 3. Bucket Policy to make it public
resource "aws_s3_bucket_policy" "public_read" {
  bucket = aws_s3_bucket.portfolio.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "arn:aws:s3:::mustansar.haseebxbiz.dev/*"
      }
    ]
  })
}
