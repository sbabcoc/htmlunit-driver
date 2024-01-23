// Licensed to the Software Freedom Conservancy (SFC) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The SFC licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

package org.openqa.selenium.htmlunit.options;

import static org.junit.Assert.assertEquals;
import static org.openqa.selenium.htmlunit.options.HtmlUnitOption.*;
import static org.junit.Assert.assertArrayEquals;

import java.io.File;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.Map;

import org.htmlunit.BrowserVersion;
import org.htmlunit.ProxyConfig;
import org.junit.Test;

public class HtmlUnitOptionTest {
    
    @Test
    public void decodeStringToCharArray() {
        char[] sslTrustStoreType = "jks".toCharArray();
        char[] decoded = (char[]) SSL_TRUST_STORE_TYPE.decode("jks");
        assertArrayEquals(sslTrustStoreType, decoded);
    }
    
    @Test
    public void decodeStringToStringArray() {
        String[] sslClientProtocols = new String[] {"foo", "bar", "baz"};
        String encoded = "[\"foo\", \"bar\",\"baz\"]";
        String[] decoded = (String[]) SSL_CLIENT_PROTOCOLS.decode(encoded);
        assertArrayEquals(sslClientProtocols, decoded);
    }
    
    @Test
    public void encodeAndDecodeFile() {
        File tempFileDirectory = new File(System.getProperty("user.home"));
        String encoded = (String) TEMP_FILE_DIRECTORY.encode(tempFileDirectory);
        File decoded = (File) TEMP_FILE_DIRECTORY.decode(encoded);
        assertEquals(tempFileDirectory, decoded);
    }
    
    @Test
    public void encodeAndDecodeInetAddress() throws UnknownHostException {
        final InetAddress localHost = InetAddress.getLocalHost();
        String encoded = (String) LOCAL_ADDRESS.encode(localHost);
        InetAddress decoded = (InetAddress) LOCAL_ADDRESS.decode(encoded);
        assertEquals(localHost, decoded);
    }
    
    @Test
    public void encodeAndDecodeProxyConfig() {
        final ProxyConfig proxyConfig = new ProxyConfig();
        proxyConfig.setProxyPort("http");
        proxyConfig.setProxyHost("htmlunit.proxy");
        proxyConfig.setProxyPort(1234);
        proxyConfig.addHostsToProxyBypass("localhost");
        proxyConfig.addHostsToProxyBypass("127\\.0\\.0\\.1");
        Object encoded = PROXY_CONFIG.encode(proxyConfig);
        ProxyConfig decoded = (ProxyConfig) PROXY_CONFIG.decode(encoded);
        verifyEquals(proxyConfig, decoded);
    }
    
    @Test
    @SuppressWarnings("unchecked")
    public void encodeAndDecodeBrowserVersion() {
        Map<String, Object> encoded = (Map<String, Object>) WEB_CLIENT_VERSION.encode(BrowserVersion.BEST_SUPPORTED);
        BrowserVersion decoded = (BrowserVersion) WEB_CLIENT_VERSION.decode(encoded);
        BrowserVersionTraitTest.verify(BrowserVersion.BEST_SUPPORTED, decoded);
    }
    
    private static void verifyEquals(final ProxyConfig expected, final ProxyConfig actual) {
        assertEquals("Proxy host mismatch", expected.getProxyHost(), actual.getProxyHost());
        assertEquals("Proxy port mismatch", expected.getProxyPort(), actual.getProxyPort());
        assertEquals("Proxy scheme mismatch", expected.getProxyScheme(), actual.getProxyScheme());
        assertEquals("Proxy type mismatch", expected.isSocksProxy(), actual.isSocksProxy());
        assertEquals("Proxy bypass hosts mismatrch",
                ProxyConfigBean.getBypassHosts(expected), ProxyConfigBean.getBypassHosts(actual));
    }
}
