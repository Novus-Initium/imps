"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon, BanknotesIcon, UserGroupIcon, BuildingLibraryIcon } from "@heroicons/react/24/outline";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-2">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">About Impact Measurement Protocols</span>
            <span className="block text-3xl font-bold">Fund A Round and Find Out</span>
          </h1>
        </div>
        <div className="flex-grow bg-base-300 w-full mt-2 px-8 py-6">
          <div className="flex justify-center items-center gap-6 flex-col sm:flex-row">
          <Link href="/projects" passHref>
            <button className="hover:bg-base-100 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform transition-transform duration-200 hover:-translate-y-1 active:translate-y-0">
            <div className="flex flex-col bg-base-100 px-8 py-8 text-center items-center max-w-xs rounded-3xl">
            <h1 className="text-center">
            <span className="block text-2xl mb-2">Projects Manager</span>
          </h1>
              <UserGroupIcon className="h-8 w-8 fill-secondary" />
              <p>
                <p><b>Create</b> a mission.
                </p>
                <b>Manage</b> a mission.
                <p>
                <b>Explore</b> live missions.{" "}
                </p>
                </p>
                <Link href="/projects/explore" passHref className="link">
                  View Current Missions
                </Link>{" "}
                <Link href="/projects/create" passHref className="link">
                  Start a Mission
                </Link>{" "}
            </div>
            </button>
            </Link>
            <Link href="/projects" passHref>
            <button className="hover:bg-base-100 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform transition-transform duration-200 hover:-translate-y-1 active:translate-y-0">
            <div className="flex flex-col bg-base-100 p-6 text-center items-center max-w-xs rounded-3xl">
            <h1 className="text-center">
            <span className="block text-2xl mb-1">Rounds Manager</span>
          </h1>
              <BuildingLibraryIcon className="h-8 w-8 fill-secondary" />
              <p>
            <p><b>Create</b> a round.
                </p>
                <b>Manage</b> a round.
                <p>
                <b>Review</b> all donations.
                {" "}
                </p>
                </p>
                <Link href="/debug" passHref className="link">
                  View Current Rounds
                </Link>{" "}
                <Link href="/debug" passHref className="link">
                  Create a new Round
                </Link>{" "}
            </div>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
