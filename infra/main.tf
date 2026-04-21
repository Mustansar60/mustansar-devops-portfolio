provider "aws" {
  region = "eu-north-1"
}

# Reference your existing bucket
resource "aws_s3_bucket" "portfolio" {
  bucket = "mustansar.haseebxbiz.dev"
}

# Enable Static Web Hosting
resource "aws_s3_bucket_website_configuration" "hosting" {
  bucket = aws_s3_bucket.portfolio.id
  index_document {
    suffix = "index.html"
  }
}

# IMPORTANT: This block removes the "Public Access Block" so the world can see it
resource "aws_s3_bucket_public_access_block" "public_block" {
  bucket = aws_s3_bucket.portfolio.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

# This policy allows everyone to read the objects in the bucket
resource "aws_s3_bucket_policy" "public_read_policy" {
  bucket = aws_s3_bucket.portfolio.id
  depends_on = [aws_s3_bucket_public_access_block.public_block]

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
