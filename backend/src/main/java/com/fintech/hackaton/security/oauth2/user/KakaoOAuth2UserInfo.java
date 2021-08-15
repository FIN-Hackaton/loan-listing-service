package com.fintech.hackaton.security.oauth2.user;

import java.util.Map;

public class KakaoOAuth2UserInfo extends OAuth2UserInfo {

    public KakaoOAuth2UserInfo(Map<String, Object> attributes) {
        super(attributes);
    }

    private Map<String, Object> kakaoAccount(Map<String, Object> attributes) {
        return (Map<String, Object>) attributes.get("kakao_account");
    }

    private Map<String, Object> kakaoProfile(Map<String, Object> attributes) {
        return (Map<String, Object>) kakaoAccount(attributes).get("profile");
    }

    @Override
    public String getId() {
        return (String) attributes.get("id");
    }

    @Override
    public String getName() {
        return (String) kakaoProfile(attributes).get("nickname");
    }

    @Override
    public String getEmail() {
        return (String) kakaoAccount(attributes).get("email");
    }

    @Override
    public String getImageUrl() {
        return (String) kakaoProfile(attributes).get("profile_image_url");
    }
}
