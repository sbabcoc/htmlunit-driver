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

package org.openqa.selenium.htmlunit.html5;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.html5.LocationContext;
import org.openqa.selenium.htmlunit.WebDriverTestCase;
import org.openqa.selenium.htmlunit.junit.BrowserRunner;
import org.openqa.selenium.htmlunit.junit.BrowserRunner.Alerts;
import org.openqa.selenium.htmlunit.junit.BrowserRunner.HtmlUnitNYI;

/**
 * Tests for LocationContext support.
 *
 * @author Ronald Brill
 */
@RunWith(BrowserRunner.class)
public class LocationContextTest extends WebDriverTestCase {

    @Test
    @Alerts(DEFAULT = "LocationContext supported",
            FF = "LocationContext not supported",
            FF_ESR = "LocationContext not supported")
    @HtmlUnitNYI(CHROME = "LocationContext not supported",
            EDGE = "LocationContext not supported")
    public void locationContext() throws Exception {
        final String html = "<html>\n"
                        + "<head>\n"
                        + "</head>\n"
                        + "<body>\n"
                        + "</body>\n"
                        + "</html>\n";

        final WebDriver driver = loadPage2(html);

        final List<String> collectedAlerts = getCollectedAlerts(driver);
        if (driver instanceof LocationContext) {
            collectedAlerts.add("LocationContext supported");
        }
        else {
            collectedAlerts.add("LocationContext not supported");
        }

        assertEquals(getExpectedAlerts(), collectedAlerts);
    }
}
