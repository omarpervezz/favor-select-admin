"use client";
import Title from "@/components/atoms/Title";
import { AddBrandBannerForm } from "@/components/molecules/banner/AddBrandBannerForm";
import { AddHomePageBannerForm } from "@/components/molecules/banner/AddHomePageBannerForm";
import { AddPopularBannerForm } from "@/components/molecules/banner/AddPopularBannerForm";
import { AddProductBannerForm } from "@/components/molecules/banner/AddProductBannerForm";
import { AddWeeklyBannerForm } from "@/components/molecules/banner/AddWeeklyBannerForm";
import { Tab, Tabs } from "@/components/molecules/global/Tabs";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { setBannerTab } from "@/store/slices/tabSlice";
import { RootState } from "@/store/store";
import React from "react";

const BannerWrapper = ({ token }: { token: string }) => {
  const dispatch = useAppDispatch();
  const activeTab = useAppSelector(
    (state: RootState) => state.tabs.bannerActiveTab
  );

  return (
    <div className="space-y-3">
      <Title text="Banner" />

      <Tabs
        activeTab={activeTab}
        onTabChange={(tab) => dispatch(setBannerTab(tab))}
      >
        <Tab label="Homepage">
          <AddHomePageBannerForm token={token} />
        </Tab>
        <Tab label="Weekly">
          <AddWeeklyBannerForm token={token} />
        </Tab>
        <Tab label="Popular">
          <AddPopularBannerForm token={token} />
        </Tab>
        <Tab label="Brand">
          <AddBrandBannerForm token={token} />
        </Tab>
        <Tab label="Product">
          <AddProductBannerForm token={token} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default BannerWrapper;
