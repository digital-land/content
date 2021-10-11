initCMS({
  config: {
    backend: {
      name: "github",
      // the repository the CMS will commit and push to
      repo: "digital-land/file-manager",
      // the branch that will get deployed
      branch: "main",
      // the openAuth Github handshake service for digital land
      base_url: "https://dl-cms-oauth-service.herokuapp.com",
    },
    // prevents NetlifyCMS from attempting to load a local YAML config file
    load_config_file: false,
    // if this resolves to true we should be running locally
    local_backend: (location.hostname === "localhost" || location.hostname === "127.0.0.1"),
    logo_url: "manager/assets/dl-logo.svg",
    public_folder: "/manager/assets/uploads",
    media_folder: "manager/assets/uploads",
    collections: dlConfig.collections // this is configured in cms/cms.config.js
  },
});