package com.test.apptest;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.Activity;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.StartsActivity;
import io.appium.java_client.remote.AndroidMobileCapabilityType;
import io.appium.java_client.remote.MobileCapabilityType;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.remote.DesiredCapabilities;
import java.net.MalformedURLException;
import java.net.URL;

public class AppTest {

	AppiumDriver driver;

	MobileElement appTitle;

	@Before
	public void setup() throws MalformedURLException {
		DesiredCapabilities desiredCapabilities = new DesiredCapabilities();
//		desiredCapabilities.setCapability(MobileCapabilityType.UDID, "1710464c");
//		desiredCapabilities.setCapability(MobileCapabilityType.DEVICE_NAME, "POCO X2");
//		desiredCapabilities.setCapability(MobileCapabilityType.PLATFORM_VERSION, "11");
		desiredCapabilities.setCapability(MobileCapabilityType.UDID, "U8DES8SKUKXSBUSO");
		desiredCapabilities.setCapability(MobileCapabilityType.DEVICE_NAME, "realme");
		desiredCapabilities.setCapability(MobileCapabilityType.PLATFORM_VERSION, "9");
		desiredCapabilities.setCapability(MobileCapabilityType.PLATFORM_NAME, "Android");
		desiredCapabilities.setCapability(MobileCapabilityType.NO_RESET, true);
		driver = new AndroidDriver(new URL("http://0.0.0.0:4723/wd/hub"), desiredCapabilities);
		if (!isShopperAppAvailable()) {
			desiredCapabilities.setCapability(AndroidMobileCapabilityType.APP_PACKAGE, "com.android.vending");
			desiredCapabilities.setCapability(AndroidMobileCapabilityType.APP_ACTIVITY,
					"com.google.android.finsky.activities.MainActivity");
		} else {
			desiredCapabilities.setCapability(AndroidMobileCapabilityType.APP_PACKAGE, "com.instacart.shopper");
			desiredCapabilities.setCapability(AndroidMobileCapabilityType.APP_ACTIVITY,
					"com.instacart.instashopper.v2.auth.ISSplashActivity");
		}
		driver = new AndroidDriver(new URL("http://127.0.1.1:4723/wd/hub"), desiredCapabilities);
	}

	public boolean isShopperAppAvailable() {
		boolean isShopperAppAvailable = false;
		if (driver != null) {
			isShopperAppAvailable = driver.isAppInstalled("com.instacart.shopper");
		}
		return isShopperAppAvailable;
	}

	@Test
	public void testGooglePlayApp() throws InterruptedException {
		
//		((StartsActivity) driver).startActivity(new Activity("com.android.vending", "com.google.android.finsky.activities.MainActivity"));
//		Thread.sleep(1000);
		
		if (!isShopperAppAvailable()) {
			String appName = "Instacart Shopper: Earn money to grocery shop";
			driver.findElementById("com.android.vending:id/0_resource_name_obfuscated").click();
			Thread.sleep(500);
			driver.findElementByXPath(
					"/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.FrameLayout/android.widget.FrameLayout[2]/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout/android.widget.EditText")
					.sendKeys(appName);
			Thread.sleep(500);
			driver.findElement(By.xpath(
					"/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.FrameLayout/android.widget.FrameLayout[1]/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout[2]/android.support.v7.widget.RecyclerView/android.widget.LinearLayout"))
					.click();
			Thread.sleep(500);
			MobileElement installButton = (MobileElement) driver.findElementByXPath(
					"/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.FrameLayout/android.widget.FrameLayout[1]/android.widget.FrameLayout/android.widget.FrameLayout/android.support.v7.widget.RecyclerView/android.widget.FrameLayout[1]/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.Button");
			installButton.click();
			Thread.sleep(10000);
		} else {
			System.out.println("open your app and do something");
		}

	}

	@After
	public void tearDown() {
		if (driver != null) {
			driver.quit();
		}
	}

}
