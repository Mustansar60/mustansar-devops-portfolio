provider "aws" {
  region = "eu-north-1" 
}

# 1. The S3 Bucket (Named exactly after your subdomain)
resource "aws_s3_bucket" "portfolio" {
  bucket = "mustansar.haseebxbiz.dev" 
}

# 2. Setup Static Web Hosting
resource "aws_s3_bucket_website_configuration" "hosting" {
  bucket = aws_s3_bucket.portfolio.id
  index_document { suffix = "index.html" }
}

# 3. Bucket Policy (Makes your site visible to the world)
resource "aws_s3_bucket_policy" "public_read" {
  bucket = aws_s3_bucket.portfolio.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Sid       = "PublicReadGetObject"
      Effect    = "Allow"
      Principal = "*"
      Action    = "s3:GetObject"
      Resource  = "${aws_s3_bucket.portfolio.arn}/*"
    }]
  })
}

# 4. Route 53 Record (Connects your subdomain to S3)
resource "aws_route53_record" "subdomain" {
  zone_id = "YOUR_HOSTED_ZONE_ID" # <-- Paste the ID from your colleague here
  name    = "mustansar.haseebxbiz.dev"
  type    = "A"

  alias {
    name                   = aws_s3_bucket_website_configuration.hosting.website_domain
    zone_id                = aws_s3_bucket.portfolio.hosted_zone_id
    evaluate_target_health = false
  }
}
