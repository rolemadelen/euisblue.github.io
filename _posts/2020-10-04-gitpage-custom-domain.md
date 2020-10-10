---
category: etc
url_path: '/github'
title: 'GitHub - Custom Domain'
type: 'etc'

layout: null
---

Currently this website is accessible via `jioneeu.github.io`

I'm already using [jioneeu.com](https://jioneeu.com) for my 
main blog, so I bought a second domain `jioneeu-til.com` from [Google Domain](https://domains.google.com)

![Google domain - my domains page](/assets/images/etc/google-domain-my-domains.png)

I'm going to configure this github page to use `jioneeu-til.com` as a custom domain.

First, goto the domain's DNS setting and look for `Custom records` which looks something like the below.

![Google domain - DNS Setting](/assets/images/etc/google-domain-dns-setting.png)

Create an `A` record with following four IP addresses.
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

To confirm that your DNS record configured correctly, open up a terminal and use the `dig` command.
Please replace `jioneeu-til.com` with your apex domain.

```sh
$ dig jioneeu-til.com +noall +answer

; <<>> DiG 9.10.6 <<>> jioneeu-til.com +noall +answer
;; global options: +cmd
jioneeu-til.com.        3600    IN      A       185.199.109.153
jioneeu-til.com.        3600    IN      A       185.199.111.153
jioneeu-til.com.        3600    IN      A       185.199.108.153
jioneeu-til.com.        3600    IN      A       185.199.110.153
```

Then, create a CNAME record.
Change `A` to `CNAME` and enter your github pages url in the first input where `@` mark is. 

![Google domain - CNAME](/assets/images/etc/google-domain-cname.png)

Now navigate to your `USERNAME.github.io` repository's setting in GitHub.

Under **GitHub Pages** - **Custom Domain**, enter your root domain name.

![Google domain - GitHub Pages](/assets/images/etc/google-domain-github-pages.png)

After about 5~10 minutes (could be faster), you should be able to enable **Enforce HTTPS** check mark and please do check it.

And it's all done →
[https://jioneeu-til.com](https://jioneeu-til.com)

## Reference
- [Managing a custom domain for your GitHub Pages site](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site)