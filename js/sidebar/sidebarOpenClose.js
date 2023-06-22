function sidebarOpenClose(button) {
    var buttonId = button.id;
  
    // Perform actions based on the button clicked
    switch (buttonId) {
      case 'imageWebSidebarButton':
        openImageSidebar();
        loadDefaultImages();
        // closeImageSidebar();
        closeIconSidebar();
        closeVideoSidebar();
        closeGithubImageSidebar();
        closeGithubVideoSidebar();
        closeGithubFileSidebar();

        break;
      case 'iconWebSidebarButton':
        openIconSidebar();
        loadDefaultIcons();
        closeImageSidebar();
        // closeIconSidebar();
        closeVideoSidebar();
        closeGithubImageSidebar();
        closeGithubVideoSidebar();
        closeGithubFileSidebar();

        break;
      case 'videoWebSidebarButton':
        openVideoSidebar();
        loadDefaultVideo();
        closeImageSidebar();
        closeIconSidebar();
        // closeVideoSidebar();
        closeGithubImageSidebar();
        closeGithubVideoSidebar();
        closeGithubFileSidebar();
        break;
      case 'imageGithubSidebarButton':
        openGithubImageSidebar();
        loadGithubImages();
        closeImageSidebar();
        closeIconSidebar();
        closeVideoSidebar();
        // closeGithubImageSidebar();
        closeGithubVideoSidebar();
        closeGithubFileSidebar();
        break;
      case 'videoGithubSidebarButton':
        openGithubVideoSidebar();
        loadGithubVideos();
        closeImageSidebar();
        closeIconSidebar();
        closeVideoSidebar();
        closeGithubImageSidebar();
        // closeGithubVideoSidebar();
        closeGithubFileSidebar();
        break;
      case 'fileGithubSidebarButton':
        openGithubFileSidebar();
        loadGithubFiles();
        closeImageSidebar();
        closeIconSidebar();
        closeVideoSidebar();
        closeGithubImageSidebar();
        closeGithubVideoSidebar();
        // closeGithubFileSidebar();
        break;
      case 'chatIaSidebarButton':
      openOpenaiTextSidebar();
      break;
      default:
        break;
    }
  }
 /** 
    closeImageSidebar();
    closeIconSidebar();
    closeVideoSidebar();

    closeGithubImageSidebar();
    closeGithubVideoSidebar();
    closeGithubFileSidebar();

  */