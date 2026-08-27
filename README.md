# Smith & Found

Launch site for **Andy Smith — Finder of Interesting Things**.

## Stack

- Static HTML/CSS/JavaScript
- GitHub source control
- Netlify hosting + Netlify Forms
- Pages CMS for phone-friendly Road Finds and road-status updates

## Deploy on Netlify today

1. In Netlify choose **Add new project → Import an existing project**.
2. Choose GitHub and select `Leosmith1244/smith-and-found`.
3. The repo includes `netlify.toml`, so no build command is needed and the publish directory is `.`.
4. Publish the site.
5. In Netlify, confirm **Forms** / form detection is enabled. The site has two forms: `find-it` and `show-andy`.
6. Add an email notification for form submissions to `minerinoregon@gmail.com` if desired.
7. Add a custom domain whenever ready.

## Let Andy post from his phone

The repo includes `.pages.yml` for Pages CMS.

1. Visit https://app.pagescms.org/
2. Sign in with GitHub and install/authorize the Pages CMS GitHub App for this repository.
3. If Andy will use his own GitHub account, add his GitHub account as a collaborator on this repo first.
4. On Andy's phone, bookmark the Pages CMS app or this site's `/admin/` page.
5. In Pages CMS, choose:
   - **Road Finds** to add a photo, title, date, location, story and status.
   - **Where's Andy?** to change the general road-location message.
6. Saving in Pages CMS commits to GitHub. Netlify's connected Git deployment will publish the update automatically.

## Contact used on site

- Email: minerinoregon@gmail.com
- Phone: 651-641-1990

## Road Find data

Road Finds live in `data/finds.json`; uploaded photos live in `media/`. The browser reads the JSON and renders the cards, so there is no package manager or build dependency.

## Replace launch photography

The homepage currently uses free Unsplash photography as visual placeholders. Replace those URLs with Andy's real images as soon as he starts sending them; the brand will get stronger immediately.
