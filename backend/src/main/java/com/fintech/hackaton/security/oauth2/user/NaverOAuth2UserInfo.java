package com.fintech.hackaton.security.oauth2.user;

import java.util.Map;

public class NaverOAuth2UserInfo extends OAuth2UserInfo {

    public NaverOAuth2UserInfo(Map<String, Object> attributes) {
        super(attributes);
    }

    private Map<String, Object> ofNaver(Map<String, Object> attributes) {
        return (Map<String, Object>) attributes.get("response");
    }

    @Override
    public String getId() {
        return (String) ofNaver(attributes).get("id");
    }

    @Override
    public String getName() {
        return (String) ofNaver(attributes).get("name");
    }

    @Override
    public String getEmail() {
        return (String) ofNaver(attributes).get("email");
    }

    @Override
    public String getImageUrl() {
        return (String) ofNaver(attributes).get("profile_image");
    }
}
